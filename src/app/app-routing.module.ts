import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';

const routes: Routes = [
  {
    path: '',
    component:UserListComponent
  },
  {
    path: 'add',
    component:AddUserComponent
  },
  {
    path: 'update/:userid',
    component:UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
