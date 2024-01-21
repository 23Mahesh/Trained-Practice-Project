import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  user = {
    name: '',
    email: '',
    password: '',
    contact: ''
  }

  constructor(
    private userService:UserService,
    private router:Router
  ){}

  onSubmitHandler(){
    this.userService.addUser(this.user).subscribe(
      (res:any)=>{
        this.router.navigate(['/']);
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }

}
