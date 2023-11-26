import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user-list/user.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: UserComponent },
      { path: ':id', component: UserFormComponent, data: { role: 'admin' } },
    ]),
  ],
  exports: [RouterModule],
})
export class UserRoutingModule {}
