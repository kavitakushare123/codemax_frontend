import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Codemax';
  langs = ['en', 'fr'];
  totalitems = 0
  token

  constructor(private translateService: TranslateService) {}

 public ngOnInit(): void {
   let browserlang = this.translateService.getBrowserLang();
   if (this.langs.indexOf(browserlang) > -1) {
     this.translateService.setDefaultLang(browserlang);
   } else {
     this.translateService.setDefaultLang('en');

   }
 }

 public useLanguage(lang: string): void {
  this.translateService.setDefaultLang(lang);
  this.translateService.use(lang);

}

public addtocart(id){
  this.totalitems = this.totalitems +1
}
 
}
