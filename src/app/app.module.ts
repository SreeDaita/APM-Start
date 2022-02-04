import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertSpacePipe } from './shared/conver-space.pipe';
import { StartRating } from './shared/star.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertSpacePipe,
    StartRating
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
