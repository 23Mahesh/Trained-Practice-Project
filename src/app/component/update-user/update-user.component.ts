import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

  user: any = {};
  userid: any = '';
  constructor(
    private userService:UserService,
    private route:ActivatedRoute,
    private router:Router
  ){
    this.userid = this.route.snapshot.params['userid']
  }

  onUpdateHandler(){
    this.userService.updateUser(this.userid, this.user).subscribe(
      (res:any)=>{
        this.router.navigate(['/']);
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }
}
