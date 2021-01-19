import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  imageSrc : any
  fileSource : any
  constructor(private authService:ServiceService) { }

  ngOnInit(): void {
  }

  add(val) 
  {
    console.log(val)
    val['fileSource'] = this.fileSource
    val['token'] = localStorage.getItem("token")

    this.authService.addproduct(val).subscribe(res=>{
      alert("Product Added Successfully!")
  })
  }


  onFileChange(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
         this.fileSource = reader.result
       /* this.myForm.patchValue({
          fileSource: reader.result
        });*/
   
      };
   
    }
  }

}
