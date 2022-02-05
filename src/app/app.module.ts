import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertSpacePipe } from './shared/conver-space.pipe';
import { StartRating } from './shared/star.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertSpacePipe,
    StartRating,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'product/:id',component: ProductDetailsComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome',pathMatch:'full'},
      {path: '**',redirectTo: 'welcome',pathMatch:'full'}

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
