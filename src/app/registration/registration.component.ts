import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../service.service';
import { Router,  NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  template:'<recaptcha  [(ngModel)]="myRecaptcha"  (scriptLoad)="onScriptLoad()"  (scriptError)="onScriptError()"></recaptcha>'
})
export class RegistrationComponent implements OnInit {
  myRecaptcha: boolean

  constructor(private authService:ServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  onScriptLoad() {
    console.log('Google reCAPTCHA loaded and is ready for use!')
}

onScriptError() {
    console.log('Something went long when loading the Google reCAPTCHA')
}
  reg(val) 
  {
    console.log(val)
    this.authService.registration(val).subscribe(res=>{
      alert("User has Registered Successfully!")
      this.router.navigate(['home'])
  })
  }

}
