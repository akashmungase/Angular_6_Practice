import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentData = 'this is come from parent';
  childData: string;
  constructor() { }

  ngOnInit() {
  }

  getData(event) {
    this.childData = event;
    console.log('this.childData', this.childData);
  }
}
