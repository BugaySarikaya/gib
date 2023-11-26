import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { DatePipe } from '@angular/common';
import { TurnGreenDirective } from './directives/turn-green.directive';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { strengthPasswordValidatorDirective } from './validators/strength-password.directive';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SubjectComponent } from './components/subject/subject.component';
import { UserService } from './services/user.service';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { RoutingComponent } from './components/routing/routing.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { UserModule } from './pages/user/user.module';
import { LoginComponent } from './pages/auth/login.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    TurnGreenDirective,
    ParentComponent,
    ChildComponent,
    strengthPasswordValidatorDirective,
    RxjsComponent,
    SubjectComponent,
    RoutingComponent,
    NotfoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
  ],
  providers: [
    DatePipe,
    // UserService,
    // {provide: UserService, useClass: UserService}
    // {provide: UserService, useClass: BetterUserService}
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
