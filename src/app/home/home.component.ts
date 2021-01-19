import { Component, OnInit } from '@angular/core';
import { Router,  NavigationExtras } from '@angular/router';
import {ServiceService} from './../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  submitted: boolean = false;
  invalidLogin:boolean = false;
  authobject
  clicked : boolean
  loginsucess
  constructor(private authService:ServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  login(val) 
  {
    this.authService.authenticate(val).subscribe(res=>{
    
      this.authobject =res
      this.loginsucess=false;
      console.log(this.authobject)
      console.log(this.authobject.token)
      if(val.user_name != "" && val.password != ""){
        if(res.token!='')
        {
          this.invalidLogin=true;
  
       //   this.b2c_userid=this.authobject.b2c_userid;
          alert('Login Successful')
          localStorage.setItem("token",this.authobject.token) 
          console.log(this.authobject.token)
          this.router.navigate(['product'])
         .then(() => {
           window.location.reload();
         });
         
        
        }
        else
        {
          alert('Invalid Credential')
  
        }
      }else{
        this.invalidLogin=false;
        alert('Invalid Credential')
  
      } 
    })
  }
}

//sitekey 6LeQnTEaAAAAAJC9T5zquiISWUbdGL5oW1tGSrmN
	//secret key 6LeQnTEaAAAAAG7Pzp4fi5QdCTuJdQuxo-XDsx4J
    
