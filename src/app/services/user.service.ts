import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' }) //angular tree shaking
// @Injectable()
export class UserService {
  statusUpdate = new EventEmitter<string>();
  baseUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getUsers(): User[] {
    let users: User[];
    users = [
      new User(1, 'John', 'Doe', 25, 'john@test.com'),
      new User(2, 'Alex', 'Doe', 26, 'alex@test.com'),
      new User(3, 'Lucy', 'Doe', 27, 'lucy@test.com'),
    ];
    return users;
  }

  getUsersFromServer(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}users`);
  }

  saveUser<T>(data: any) {
    return this.http.post<T>(`${this.baseUrl}users`, data);
  }

  updateUser<T>(data: any, id: any) {
    return this.http.patch<T>(`${this.baseUrl}users/${id}`, data);
  }

  deleteUser<T>(id: any) {
    return this.http.delete<T>(`${this.baseUrl}users/${id}`);
  }

  /*
      consumer(tüketici): component, directive, service, UserCompnent
      
      dependency (bağımlılık): UserService

      injection token (DI token): tekil dependency belirleyicisi
      injection token: const APIURL = new InjectionToken<string>('');
      providers: [{provide: APIURL, useValue: 'http://someendpoint.com/api'}]

      provider (sağlayıcı): AppModule (module, component)

      string token:
      app.module.ts: 
      providers: [{provide: 'USER_SERVICE', useClass: UserService}]

      user.component.ts:

      constructor(@Inject('USER_SERVICE') private userService: UserService ) {}

      injector:

      root module injector (application-wide)

      moduleinjector hierarchy:
      Null Injector -> Platform Module -> Root Module -> Lazy Module A, Lazy Module B

      Resolution Modifiers injector(araştırılabilir)
      @Self, @SkipSelf, @Optional, @Host
    */

  //cross component communication
}
