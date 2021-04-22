import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  _currentValue = 'css';
  textToShow;
  getArray=[];
  @Output() sendMenu: EventEmitter<any> = new EventEmitter();


  @Input('sendValue') set currentValue(value: string) {
    this._currentValue = value;
    console.log(this._currentValue);

    switch(value){
      case 'html':
        this.textToShow = 'HTML works';
        break;
      case 'css':
        this.textToShow = 'CSS works';
        break;
      case 'js':
        this.textToShow = 'Java Script works!';
        break;
      case 'python' :
        this.textToShow = 'Python Works';
        break;
      case 'bootstrap' :
        this.textToShow = 'Bootstrap Wroks';
        break;
      case 'sql' :
        this.textToShow = 'SQL Works';
        break;
      default:
        this.textToShow = 'CSS works';
    }
  }

  count = 0;
  isNext =true
  title;
  getData;
  completed;
  id;
  title1;
  userId;
_
  constructor(public mainService : MainService) { }

  ngOnInit(): void {
    this._currentValue = 'css'
    this.count =0;  
      

  }

  api(){
    this.getArray = [];
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {console.log(json);
      this.getData = json;
      this.getArray.push(this.getData); 
      console.log('aa',this.getData);});
      
    
  }

  onPrevious() {
    if(this.count<1){
      this.count=12;
    }
    this.count= this.count-1;
    this.sendMenu.emit({index1: this.count});
    this.title = 'Clicked Previous'

  }

  onNext() {
    if(this.count>10){
      this.count=-1;
    }
    
    this.count= this.count + 1;
    this.sendMenu.emit({index1: this.count});
    this.title = 'Clicked Next'

  }

}
