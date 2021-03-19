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
  ownId: number = 25;
  userArray: any[] = [];

  constructor(private connectionService: ConnectionService,) { }


  transform(value: User[] | null, all: boolean = true): User[] | null {

    if (!Array.isArray(value)) {
      return value
    }
    this.connections = this.connectionService.getById(this.ownId)

    let i = 0;

    if (all) {
      this.connections.subscribe(
        element => element.forEach(e => {
          if (e.user1 === this.ownId) {
            this.userArray[i]=(value.find(u => u.id === e.user2))
            i += 1;
          }
        }));
    } else {

      this.connections.subscribe(
        element => element.forEach(e => {
          if (e.user1 === this.ownId && e.accepted) {
            this.userArray[i]=(value.find(u => u.id === e.user2))
            i += 1;
          }
        }));
    }
    return this.userArray
  }
}
