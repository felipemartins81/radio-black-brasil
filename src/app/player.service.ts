import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as $ from 'jquery'

declare var soundManager: any;

@Injectable()
export class PlayerService {
	smTrackList: any;
	smPlaying: boolean = false;
	smCounter: number = 0;
	smTrackStr: string = 'track_';
	smActualTrack: any;
	smLastTrackId: number = 0;
	smCreatedFromOut: boolean = false;
	auxTrackList = [];

	private smWaiting = new BehaviorSubject<boolean>(false);
	smWaiting$ = this.smWaiting.asObservable();

   smCreateSound(_url, _type): void{ 
		// out player
		if(_type && typeof(_type) === 'object'){
			this.smCounter = this.smLastTrackId;

			this.smActualTrack = this.smTrackList[ this.smCounter ];
			this.smActualTrack.url = _url;
			this.smActualTrack.smTrackId = null;
			this.smActualTrack.artist = _type.artist;
			this.smActualTrack.title = _type.title;

			this.smCreatedFromOut = true;
		}
		else {
			this.smActualTrack = this.smTrackList[ this.smCounter ];
		}
		if(!this.smActualTrack.smTrackId){
			if(_type !== 'firstCall'){
				this.smWaiting.next(true);
			}
			this.smActualTrack.smTrackId = this.smTrackStr + this.smCounter.toString();
			soundManager.createSound({
				id: this.smActualTrack.smTrackId,
				url: _url,
				autoPlay: true,
				onload: function() {
					setAfterCreate('onload');
				},
				onbufferchange: function(state) {
					if(this.smWaiting !== undefined && state === 0){
						console.warn('>> buffer change state 0');
						this.smWaiting.next(false);
					}
					else if(this.smWaiting !== undefined && state === 1){
						console.warn('<< buffer change state 1');
						this.smWaiting.next(true);
					}
				},
				whileplaying: function() {
					$("#progress").css('width', ((this.position/this.duration) * 100) + '%');
				},
			});
		}
		let setAfterCreate = (_onType) => {
			switch(_onType){
				case 'onload': 
					this.smWaiting.next(false);
					break;
			}
		}
		this.smLastTrackId = soundManager.soundIDs.length;
	}

	smPlay(_pos): boolean {
		switch(_pos){
			case 'firstCall':
				this.smCreateSound(this.smTrackList[ this.smCounter ].url, _pos); 
				this.smPlaying = false;
				setTimeout(()=>{ soundManager.pauseAll() }, 500);
				break;
			// play or pause
			case 'self':
				if(this.smPlaying){
					soundManager.pauseAll();
					this.smPlaying = false;
				}
				else{
					soundManager.resumeAll();
					this.smPlaying = true;
				}
				break;
			// next or prev
			case 'prev':
				if(this.smCounter === 0) return; // first
				soundManager.stop(this.smActualTrack.smTrackId);
				soundManager.unload(this.smActualTrack.smTrackId);
				this.smCounter--;
				this.smActualTrack = this.smTrackList[ this.smCounter ];
				soundManager.play(this.smTrackStr + this.smCounter.toString());
				this.smPlaying = true;
				break;
			case 'next':
				if(this.smCounter === this.smTrackList.length - 1) return; // last
				soundManager.stop(this.smActualTrack.smTrackId);
				soundManager.unload(this.smActualTrack.smTrackId);
				this.smCounter++; 
				this.smCreateSound(this.smTrackList[ this.smCounter ].url, null); 
				soundManager.play(this.smActualTrack.smTrackId);
				this.smPlaying = true;
				break;
		}
      return this.smPlaying;
	}

   getTrackInfo(): object {
      return this.smActualTrack;
   }
}