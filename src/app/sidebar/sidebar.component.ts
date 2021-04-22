import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  selectedMenu = 0;

  @Input('selected1') set menuIndex(v:number) {
    console.log(v);
    
      this.selectedMenu = v
  };
  sidebarItems = ['Tutorial', 'HOME','Introduction','Syntax','Selectors','Comments','Colors','Backgrounds','Borders','Margins','Padding','Outline']
  constructor() { }

  ngOnInit(): void {
    this.selectedMenu = 0;
  }

  onclick(a){
    this.selectedMenu=a;
    
  }
}
