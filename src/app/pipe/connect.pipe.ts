import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Connection } from '../model/connection';
import { User } from '../model/user';
import { ConnectionService } from '../service/connection.service';

@Pipe({
  name: 'connect'
})
export class ConnectPipe implements PipeTransform {

  connections: Observable<Connection[]> = new Observable<Connection[]>();
  // ownId: number = 25;
  userArray: any[] = [];

  constructor(private connectionService: ConnectionService,) { }


  transform(value: User[] | null, accepted: boolean = false, ownId: number): User[] | null {

    if (!Array.isArray(value) || !ownId) {
      return value
    }
    this.connections = this.connectionService.getById(ownId)

    let i = 0;

    if (!accepted) {
      this.connections.subscribe(
        element => element.forEach(e => {
          if (e.user1 === ownId) {
            this.userArray[i]=(value.find(u => u.id === e.user2))
            i += 1;
          }
        }));
    } else {

      this.connections.subscribe(
        element => element.forEach(e => {
          if (e.user1 === ownId && e.accepted) {
            this.userArray[i]=(value.find(u => u.id === e.user2))
            i += 1;
          }
        }));
    }
    return this.userArray
  }
}
