import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  //ส่งค่า ไป html
  message:string = "Hello Angular";

  //ตัวแปร object เช่น profile = []
  //ตัวแปร array 1 ชุด profile = {}
  profile = {
    "name" : "Pattarapong",
    "tel" : "06498774295",
    "gender" : "Male"
  } 

  userData = {
    "email" : "",
    "password" : ""
  };

  constructor(private router: Router) { }

  ngOnInit(): void {


  }

  submitLogin(){
    // alert('Hey Angular');
    if(this.userData.email == "home.pattarapong@gmail.com" && this.userData.password == "1234")
    {
      alert('Login Success');
      this.router.navigate(['backend']);
    }else{
      alert('Login Fail!!!');
    }

  }

}
