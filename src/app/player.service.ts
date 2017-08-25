import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare var soundManager: any;

@Injectable()
export class PlayerService {

  // Observable string sources
  private strTeste = 'str service teste';
//   private missionConfirmedSource = new Subject<string>();


	smTrackList: any;
	smPlaying: boolean = false;
	smCounter: number = 0;
	smTrackStr: string = 'track_';
	smActualTrack: any;
	// smPlayerMode: string = 'info';

	// smWaiting: boolean = true;
	private smWaiting = new BehaviorSubject<boolean>(true);
	smWaiting$ = this.smWaiting.asObservable();

	// private testeObs = new BehaviorSubject<string>('111');
	// streamObs$ = this.testeObs.asObservable();

	// Observable string streams
	//   missionAnnounced$ = this.missionAnnouncedSource.asObservable();
	//   missionConfirmed$ = this.missionConfirmedSource.asObservable();

	// Service message commands
	announceMission(mission: string) {
		// this.missionAnnouncedSource.next(mission);
		this.strTeste = mission;
	}

	confirmMission(astronaut: string) {
		// this.missionConfirmedSource.next(astronaut);
	}

  //

   smCreateSound(_url, _type): void{ 
		if(_type === 'outPlayer'){
			this.smCounter++
		}
// this.testeObs.next('222');
		this.smActualTrack = this.smTrackList[ this.smCounter ];
		if(!this.smActualTrack.smTrackId){
			// this.smWaiting = true;
			this.smWaiting.next(true);
			this.smActualTrack.smTrackId = this.smTrackStr + this.smCounter.toString();
			soundManager.createSound({
				id: this.smActualTrack.smTrackId,
				url: _url,
				autoPlay: _type ? true : false,
				onload: function() {
					if(_type === 'firstCall'){
						soundManager.pauseAll();
					}
					setAfterCreate('onload');
				}
			});
		}
		let setAfterCreate = (_type) => {
			switch(_type){
				// case 'onload': this.smWaiting = false;
				case 'onload': this.smWaiting.next(false);
			}
		}
	}

	smPlay(_pos): boolean {
		switch(_pos){
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
			default:
				if(_pos === 'prev'){
					if(this.smCounter === 0) return; // first
					soundManager.stop(this.smActualTrack.smTrackId);
               soundManager.unload(this.smActualTrack.smTrackId);
					this.smCounter--;
				}
				if(_pos === 'next'){
					if(this.smCounter === this.smTrackList.length - 1) return; // last
					soundManager.stop(this.smActualTrack.smTrackId);
               soundManager.unload(this.smActualTrack.smTrackId);
					this.smCounter++; 
				}
				this.smCreateSound(this.smTrackList[ this.smCounter ].url, null); 
				soundManager.play(this.smActualTrack.smTrackId);
				this.smPlaying = true;
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