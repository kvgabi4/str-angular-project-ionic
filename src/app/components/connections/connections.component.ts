import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Connection } from 'src/app/model/connection';
import { User } from 'src/app/model/user';
import { ConnectionService } from 'src/app/service/connection.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss'],
})
export class ConnectionsComponent implements OnInit {

  userList$: BehaviorSubject<User[]> = this.userService.userList$;
  connectionList$: BehaviorSubject<Connection[]> = this.connectionService.connectionList$;

  connections: Observable<Connection[]> = new Observable<Connection[]>();
  users: Observable<User[]> = new Observable<User[]>();
  ownId = 25;

  constructor(
    private connectionService: ConnectionService,
    private userService: UserService,
    private router: Router
  ) {


     }

  ngOnInit() {
    this.userService.getAll();
    this.connectionService.getAll();

    this.users = this.userList$.pipe();

  }

  disConnect(user: User): void {
    console.log(this.ownId, user.id)
    const currentConnection = this.connectionService.getConnection(this.ownId, user.id).subscribe(
      (conn => {
        this.connectionService.delete(conn[0]).subscribe(() => this.connectionService.getAll());
        this.router.navigate([this.router.url]);
        document.location.reload()
      })
    );
  }
}

