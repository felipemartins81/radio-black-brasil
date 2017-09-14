import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as $ from 'jquery'

declare var soundManager: any;

@Injectable()
export class PlayerService {

  // Observable string sources
//   private strTeste = 'str service teste';
//   private missionConfirmedSource = new Subject<string>();


	smTrackList: any;
	smPlaying: boolean = false;
	smCounter: number = 0;
	smTrackStr: string = 'track_';
	smActualTrack: any;
	smLastTrackId: number = 0;
	// smPlayerMode: string = 'info';

	// smWaiting: boolean = true;
	private smWaiting = new BehaviorSubject<boolean>(true);
	smWaiting$ = this.smWaiting.asObservable();

   smCreateSound(_url, _type): void{ 
		// out player
		if(_type && typeof(_type) === 'object'){
			// console.log(_type);
			this.smCounter = this.smLastTrackId;
			this.smActualTrack.url = _url;
			this.smActualTrack.smTrackId = null;
			this.smActualTrack.artist = _type.artist;
			this.smActualTrack.title = _type.title;
		}
		else {
			this.smActualTrack = this.smTrackList[ this.smCounter ];
		}
		if(!this.smActualTrack.smTrackId){
			// this.smWaiting = true;
			this.smWaiting.next(true);
			this.smActualTrack.smTrackId = this.smTrackStr + this.smCounter.toString();
			soundManager.createSound({
				id: this.smActualTrack.smTrackId,
				url: _url,
				autoPlay: true,
				onload: function() {
					// if(_type === 'firstCall'){
					// 	soundManager.pauseAll();
					// }
					setAfterCreate('onload');
				},
				onbufferchange: function() {
					
				},
				whileplaying: function() {
					$("#progress").css('width', ((this.position/this.duration) * 100) + '%');
				},
			});
		}
		let setAfterCreate = (_onType) => {
			switch(_onType){
				// case 'onload': this.smWaiting = false;
				case 'onload': 
					this.smWaiting.next(false);
					// if(this.smCounter === 0){
					// 	console.log(' - --  -- - - - -- - - - ');
					// 	setTimeout(()=>{ soundManager.pauseAll() }, 500);
					// }
					break;
			}
		}
		this.smLastTrackId = soundManager.soundIDs.length;
	}

	smPlay(_pos): boolean {
		switch(_pos){
			case 'firstCall':
				this.smCreateSound(this.smTrackList[ this.smCounter ].url, _pos); 
				// soundManager.play(this.smActualTrack.smTrackId);
				this.smPlaying = false;
				setTimeout(()=>{ soundManager.pauseAll() }, 500);
				break;
			// play ot pause
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
				this.smCreateSound(this.smTrackList[ this.smCounter ].url, null); 
				soundManager.play(this.smActualTrack.smTrackId);
				this.smPlaying = _pos === 'firstCall' ? false : true;
				break;
			case 'next':
				if(this.smCounter === this.smTrackList.length - 1) return; // last
				soundManager.stop(this.smActualTrack.smTrackId);
				soundManager.unload(this.smActualTrack.smTrackId);
				this.smCounter++; 
				this.smCreateSound(this.smTrackList[ this.smCounter ].url, null); 
				soundManager.play(this.smActualTrack.smTrackId);
				this.smPlaying = _pos === 'firstCall' ? false : true;
				break;
		}
      return this.smPlaying;
	}

   trackIsLoaded(): boolean {
      return !this.smWaiting;
   }

   getTrackInfo(): object {
      return this.smActualTrack;
   }

	// smChangePlayerMode(): void {
	// 	switch(this.smPlayerMode){
	// 		case 'controls':
	// 			this.smPlayerMode = 'info';
	// 			break;
	// 		case 'info':
	// 			this.smPlayerMode = 'controls';
	// 			break;
	// 	}
	// }
}