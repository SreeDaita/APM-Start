import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";



@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})


export class StartRating implements OnChanges{
   @Input() rating :number=0;
    cropWidth :number =75;
    @Output() ratingClicked: EventEmitter <string> = new EventEmitter<string>();

    ngOnChanges(): void {
        console.log("fire onchange ", this.rating);
        this.cropWidth = this.rating * 75/5;
    }
 
    onClick():void{
      console.log(`user clicked ${this.rating}`);
      this.rating = parseFloat((this.rating+0.1).toPrecision(10)) ;
      this.cropWidth = this.rating * 75/5;
      
      this.ratingClicked.emit((this.rating).toPrecision(10));
  }
}