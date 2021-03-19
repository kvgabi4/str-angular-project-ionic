import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { find, map, tap } from 'rxjs/operators';
import { Connection } from 'src/app/model/connection';
import { User } from 'src/app/model/user';
import { ConnectionService } from 'src/app/service/connection.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  userList$: BehaviorSubject<User[]> = this.userService.userList$;
  connectionList$: BehaviorSubject<Connection[]> = this.connectionService.connectionList$;
  connection: Connection = new Connection;
  ownId = 25;

  connections: Observable<Connection[]> = new Observable<Connection[]>();

  all: boolean = false;

  phrase: string = '';

  markedArray: any[] = [];

  constructor(
    private userService: UserService,
    private connectionService: ConnectionService,

  ) { }

  ngOnInit() {
    let i = 0;
    this.userService.getAll();

    this.connections = this.connectionService.getById(this.ownId)

    this.connections.subscribe(users => users.forEach(user => {
      this.markedArray[i] = user.user2;
      i += 1;
    }));
  }

  markUser(user: User): void {
    this.connection.user1 = this.ownId;
    this.connection.user2 = user.id;
    this.connectionService.create(this.connection)
  }



  changeAll(): void{
    this.all = !this.all;
    }


}
