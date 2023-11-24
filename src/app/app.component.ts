import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gib';
  makeRedRef: string = 'makeRed';
  makeRedStyle: string = 'red';
  imageRef: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  apiRef: string = 'https://angular.io';

  //xss sanitize
  script: string = '<script>alert("hello")</script>';
  div: string = '<div>Hello world</div>'
  safeHtml!: SafeHtml;
  message: string = 'Hello World!';
  isButtonDisabled: boolean = false;
  dynamicValue: string = 'Initial Value';
  value: string = '2way data binding';
  email: string = '';

  constructor(private sanitizier: DomSanitizer) {

  }

  ngOnInit() {
    this.safeHtml = this.sanitizier.bypassSecurityTrustHtml(this.div);
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

}
