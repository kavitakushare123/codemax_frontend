import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../app/environment';
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  )
};
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiurl = environment.apiUrl;
  loginurl = this.apiurl + '/home/user_login';
  regurl = this.apiurl + '/home/registration';
  contacturl = this.apiurl + '/home/contactus';
  addprodurl = this.apiurl + '/home/product';
  listprodurl = this.apiurl + '/home/product_list';


  constructor(private http: HttpClient) { }

  authenticate(data): Observable<any> {
    // console.log(data);
    return this.http.post(`${this.loginurl}`, data, httpOptions)
  }
  registration(data): Observable<any> {
    // console.log(data);
    return this.http.post(`${this.regurl}`, data, httpOptions)
  }
  contactus(data): Observable<any> {
    // console.log(data);
    return this.http.post(`${this.contacturl}`, data, httpOptions)
  }
  addproduct(data): Observable<any> {
    // console.log(data);
    var httpOptions1 = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Authorization":  data['token']
        }
      )
    };

    return this.http.post(`${this.addprodurl}`, data, httpOptions1)
  }
  listproduct(data): Observable<any> {
    // console.log(data);
    return this.http.get(`${this.listprodurl}`,   { headers: httpOptions.headers })
  }
  
  public logedIn() {
    if (localStorage.getItem("token") != 'undefined' && localStorage.getItem("token") != null && localStorage.getItem("token") != '') {
      //  alert("in")
      return true
    }
    else
      return false
  }
}
