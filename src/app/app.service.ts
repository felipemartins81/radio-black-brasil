import { Injectable } from '@angular/core';

@Injectable()
export class MissionService {

  // Observable string sources
  private strTeste = 'str service teste';
//   private missionConfirmedSource = new Subject<string>();

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

  getStr(){
      return this.strTeste;
  }
}