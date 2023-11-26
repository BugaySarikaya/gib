import { NgModule } from '@angular/core';
import {
  NoPreloading,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { UserComponent } from './pages/user/user-list/user.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/auth/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'rxjs', pathMatch: 'full' },
  { path: 'parent', component: ParentComponent },
  { path: 'rxjs', component: RxjsComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'user',
  //   component: UserComponent,
  //   children: [{ path: ':id', component: UserFormComponent }],
  // },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
  },
  // { path: 'user/:id', component: UserFormComponent },
  { path: '**', component: NotfoundComponent }, //wild card route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  // imports: [
  //   RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  // ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
