import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent {
  subject = new Subject<string>();
  behaviorSubject = new BehaviorSubject<string>('hello');

  constructor(private userService: UserService) {
    // this.subject.subscribe((value) => {
    //   console.log('Recevied value: ', value);
    // });
    this.subject.next('Hello from subject');

    // setTimeout(() => {
    //   this.subject.next('Update message from Subject');
    // }, 2000);

    this.behaviorSubject.subscribe((value) => {
      // console.log('Recevied value (behavior): ', value);
    });
    this.behaviorSubject.next('Hello from (behavior) subject');

    this.userService.statusUpdate.emit('User Logged In!');
  }
}
