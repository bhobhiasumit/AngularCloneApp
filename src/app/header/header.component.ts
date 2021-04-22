import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sendData: EventEmitter<any> = new EventEmitter();
  selectedValue: string = 'css';
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(value){
    this.selectedValue = value;
    this.sendData.emit({selectedValue : value})
  }
}
