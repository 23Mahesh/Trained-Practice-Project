import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Base_Url = "http://localhost:8080/user/"
  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(this.Base_Url+ "getUser");
  }

  addUser(data:any){
    return this.http.post(this.Base_Url + "postUser",data);
  }

  updateUser(id:any, data:any){
    return this.http.put(this.Base_Url +"updateUser/"+id,data);
  }

  deleteUser(id:any){
    return this.http.delete(this.Base_Url+"delUser/"+id);
  }
}
