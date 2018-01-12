import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as $ from 'jquery'

declare var soundManager: any;

@Injectable()
export class PlayerService {
	smTrackList: any;
	smCounter: number = 0;
	smTrackStr: string = 'track_';
	smActualTrack: any;
	smLastTrackId: number = 0;
	smCreatedFromOut: boolean = false;
	auxTrackList = [];

	private smWaiting = new BehaviorSubject<boolean>(false);
	smWaiting$ = this.smWaiting.asObservable();

	private smPlaying = new BehaviorSubject<boolean>(false);
	smPlaying$ = this.smPlaying.asObservable();

   smCreateSound(_url, _type): void{ 
		// out player
		if(_type && typeof(_type) === 'object'){
			this.smCounter = this.smLastTrackId;

			this.smActualTrack = this.smTrackList[ this.smCounter ];
			this.smActualTrack.url = _url;
			this.smActualTrack.smTrackId = null;
			this.smActualTrack.artist = _type.artist;
			this.smActualTrack.title = _type.title;
			this.smPlaying.next(true);
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
				this.smPlaying.next(false);
				setTimeout(()=>{ soundManager.pauseAll() }, 500);
				break;
			// play or pause
			case 'self':
				if(this.smPlaying.value){
					soundManager.pauseAll();
					this.smPlaying.next(false);
				}
				else{
					soundManager.resumeAll();
					this.smPlaying.next(true);
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
				this.smPlaying.next(true);
				break;
			case 'next':
				if(this.smCounter === this.smTrackList.length - 1) return; // last
				soundManager.stop(this.smActualTrack.smTrackId);
				soundManager.unload(this.smActualTrack.smTrackId);
				this.smCounter++; 
				this.smCreateSound(this.smTrackList[ this.smCounter ].url, null); 
				soundManager.play(this.smActualTrack.smTrackId);
				this.smPlaying.next(true);
				break;
		}
	  return this.smPlaying.value;
	}

   getTrackInfo(): object {
      return this.smActualTrack;
   }
}