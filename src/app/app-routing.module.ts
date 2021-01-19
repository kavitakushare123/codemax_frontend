import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AuthGuard } from './auth.guard'


const routes: Routes = [
{
  path: '',
  children: [
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'product', component: ProductComponent , canActivate: [AuthGuard]  },
    { path: 'contact', component: ContactComponent },
    { path: 'listproduct', component: ListProductComponent },

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
