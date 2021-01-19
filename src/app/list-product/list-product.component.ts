import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../service.service';
import {AppComponent} from '../app.component'
import { environment } from '../environment';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
product:any
url:any

  constructor(private authService:ServiceService,private appcomp:AppComponent) { }

  ngOnInit(): void {
    this.url = environment.apiUrl+"/upload/"
   let data =''
    this.authService.listproduct(data).subscribe(res=>{
      this.product = res
    })
  
  }
  public addtocart(id){
    this.appcomp.addtocart(id)
  }

}
