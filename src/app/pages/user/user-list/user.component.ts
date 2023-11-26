import { Component, Inject, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  // providers: [UserService]
})
export class UserComponent implements OnInit {
  // userService!: UserService;
  userList: User[] = [];
  loading: boolean = false;

  constructor(private userService: UserService) {
    // this.userService = new UserService();
    // this.userList = this.userService.getUsers();
    // console.log(this.userList);
    // this.userService.statusUpdate.subscribe((status: string) => {
    //   console.log('new status: ', status);
    // });
  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.loading = true;
    setTimeout(() => {
      this.userService.getUsersFromServer().subscribe(
        (userList) => {
          this.userList = userList;
        },
        (error) => console.error(error),
        () => {
          this.loading = false;
        }
      );
    }, 2000);
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

    // this.userList.push(newUser);
    this.userService.saveUser(newUser).subscribe(
      (response) => {
        console.log(response);
        this.refreshUserList();
      },
      (error) => console.error(error)
    );
  }

  deleteUser(i: any) {
    // this.userList.splice(i, 1);
    this.userService.deleteUser(i).subscribe(
      (response) => {
        console.log(response);
        this.refreshUserList();
      },
      (error) => console.error(error)
    );
  }

  refreshUserList() {
    this.getUserList();
  }
}
