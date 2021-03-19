import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  ownId: number = 25;
  user$: Observable<User> = this.userService.get(this.ownId);


  // userList$: BehaviorSubject<User[]> = this.userService.userList$;

  // @Input() user: User = new User()


  clicked: boolean = false;
  // category: string = 'new';

  public genders = [
    { gender: 'male', isChecked: true },
    { gender: 'female', isChecked: false },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) {
    // this.user = {
    //   id: 0,
    //   name: 'Mekk Elek',
    //   gender: 'male',
    //   age: 5,
    //   description: 'Two-left-handed handyman',
    //   photo: './assets/images/mekk-elek.jpg',
    //   location: {
    //     id: 1,
    //     zip: 7202,
    //     city: 'Kukutyin',
    //     address: 'Mesterek utcája 589.'
    //   },
    //   interest: {
    //     id: 1,
    //     name: 'repair',
    //     description: "Integer ac leo.Pellentesque ultrices mattis odio."
    //   }
    // }
  }

  ngOnInit(): void {
    this.user$ = this.userService.get(this.ownId).pipe(
      tap(()=>console.log(this.user$))
    )

  }

  // this.userList$.subscribe(
  //   user => {
  //     user.filter(u => this.user = u);

  //     // this.user = currentUser;
  //   }
  // )


  onUpdate(form: NgForm, user: User): void {
    // user.id = parseInt('' + 0);
    this.clicked = true;
    if (!user.id) {
      this.userService.create(user);
      this.router.navigate(['tabs/tab1']);
    } else {
      this.userService.update(user).subscribe(
        () => this.router.navigate(['tabs/tab1'])
      );
    }
    //console.log('onUpdate:',form.value, user)
  }

}
