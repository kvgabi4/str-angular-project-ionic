import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user: User = new User();
  user$: BehaviorSubject<User[]> = this.userService.userList$;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getAll()
  }

}
