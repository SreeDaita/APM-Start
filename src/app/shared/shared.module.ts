import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRating } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertSpacePipe } from './conver-space.pipe';



@NgModule({
  declarations: [
    StartRating,
    ConvertSpacePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StartRating,
    FormsModule,
    ConvertSpacePipe,
    CommonModule
  ]
})
export class SharedModule { }
