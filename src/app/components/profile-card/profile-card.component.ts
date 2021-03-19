import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {

  @Input() user: User = new User;

  @Output() mark: EventEmitter<User> = new EventEmitter();
  @Input() marked: boolean = false;

  @Output() unconnect: EventEmitter<User> = new EventEmitter();
  @Input() connection: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMark(user: User): void {
    this.mark.emit(user);
    this.marked = !this.marked
  }

  onDeleteConnection(user): void {
    this.unconnect.emit(user);
  }

}
