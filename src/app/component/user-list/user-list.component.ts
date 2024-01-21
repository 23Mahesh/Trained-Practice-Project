import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users:any = []
  filtered: any = [];

  constructor(private userService:UserService,){}
  ngOnInit(): void {

    this.userService.getUser().subscribe(
      (res:any)=>{
        console.log(res)
        this.users = res
      },
      (err:any)=>{
        console.log(err)
      }
    )

  }


  onDeletHandler(userid:any){
    this.userService.deleteUser(userid).subscribe(
      (res:any)=>{

        this.filtered = this.users.filter((ele:any)=> ele.id !== userid);
        this.users = this.filtered;

        console.log("User deleted");

      },
      (err:any)=>{
        console.log(err)
      }
    )
  }
}
