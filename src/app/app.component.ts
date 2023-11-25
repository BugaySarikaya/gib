import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gib';
  makeRedRef: string = 'makeRed';
  makeRedStyle: string = 'red';
  imageRef: string =
    'https://angular.io/assets/images/logos/angular/angular.png';
  apiRef: string = 'https://angular.io';

  //xss sanitize
  script: string = '<script>alert("hello")</script>';
  div: string = '<div>Hello world</div>';
  safeHtml!: SafeHtml;
  message: string = 'Hello World!';
  isButtonDisabled: boolean = false;
  dynamicValue: string = 'Initial Value';
  value: string = '2way data binding';
  email: string = '';
  message2: string = 'Lorem ipsum dolor sit amet.';
  currentDate: Date = new Date();
  currentTime$!: Observable<Date>;
  randomDate: string = '';
  serverCreated: boolean = true;
  users = [
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      age: 15,
      email: 'test@test.com',
    },
    {
      id: 2,
      name: 'Jack',
      surname: 'Doe',
      age: 16,
      email: 'test@test.com',
    },
    {
      id: 3,
      name: 'Elisa',
      surname: 'Doe',
      age: 25,
      email: 'test@test.com',
    },
    {
      id: 4,
      name: 'Alex',
      surname: 'Doe',
      age: 28,
      email: 'test@test.com',
    },
    {
      id: '5',
      name: 'Chris',
      surname: 'Doe',
      age: 32,
      email: 'test@test.com',
    },
  ];

  usersBackup: any[] = [];
  luckyNumber: number = 6;

  constructor(private sanitizier: DomSanitizer, private datePipe: DatePipe) {
    this.usersBackup = [...this.users];
  }

  ngOnInit() {
    this.safeHtml = this.sanitizier.bypassSecurityTrustHtml(this.div);

    this.currentTime$ = interval(1000).pipe(map(() => new Date()));

    this.randomDate = this.datePipe.transform(new Date()) || '';
  }

  getTitle() {
    return this.title;
  }

  updateDynamicValue(event: any) {
    this.dynamicValue = event?.target.value;
  }

  activateHandler(val: any) {
    console.log(val);
  }

  emailOnChange(value: string) {
    console.log('Email: ', value);
  }

  emailChanged(val: any) {
    console.log(val);
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }

  addNewUser() {
    const newUser = {
      id: Math.random() * 10,
      name: 'Lucy',
      surname: 'Doe',
      age: 25,
      email: 'test@test.com',
    };

    this.users.push(newUser);
  }

  deleteUser(i: any) {
    this.users.splice(i, 1);
  }

  refreshUserList() {
    this.users = [...this.usersBackup];
  }

  isValid() {
    return true;
  }
}
