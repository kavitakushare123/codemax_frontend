import { Component, OnInit, ViewChild } from '@angular/core';
import {ServiceService} from './../service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  message :any
  constructor(private authService:ServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(val){}
  reg(val) 
  {
    console.log(val)
    this.authService.contactus(val).subscribe(res=>{
  })
  }
}
