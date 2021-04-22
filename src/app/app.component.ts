import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';
  selectedValue;
  selected =0;
  isNext;

  getData(e){

    console.log(e)
    this.selectedValue = e.selectedValue;
  }

  getMenu(s){
    console.log(s);
    this.selected = s.index1;
    //this.isNext = s.isNext;

  }
}
