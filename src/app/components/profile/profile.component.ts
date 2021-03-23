import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { PhotoService } from 'src/app/service/photo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  @Output() ownId: number = 25;
  user$: Observable<User> = this.userService.get(this.ownId);

  clicked: boolean = false;

  public genders = [
    { gender: 'male', isChecked: true },
    { gender: 'female', isChecked: false },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    public photoService: PhotoService,
  ) { }

  ngOnInit(): void {
    this.user$ = this.userService.get(this.ownId).pipe(
      tap(param => console.log(param))
    )
  }

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
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
