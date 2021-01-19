import { Component, OnInit } from '@angular/core';
import { Router,  NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')

  }
  actionMethod(){
  
    localStorage.removeItem("token") 
   window.location.reload()
   this.router.navigate(['home'])
   .then(() => {
     window.location.reload();
   });
  
  }
  
}
