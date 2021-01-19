import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { ListProductComponent } from './list-product/list-product.component';
import { RecaptchaModule } from 'angular-google-recaptcha';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function TranslationLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    RegistrationComponent,
    ContactComponent,
    ListProductComponent,

  ],
  exports: [TranslateModule]
,
  imports: [
    TranslateModule.forChild({}),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    FormsModule,
    CommonModule,
    RecaptchaModule.forRoot({
      siteKey: '6Lei5jIaAAAAAHW0SuS4sSJwH9hIKAYQqJmroJei',
  }),
  TranslateModule.forRoot({
    loader: {provide: TranslateLoader, useFactory: TranslationLoaderFactory, deps: [HttpClient]}
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
