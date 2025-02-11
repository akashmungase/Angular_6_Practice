import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  data: string;
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    // this.data = 'this is come from Parent';
  }

  getData(event: string) {
    console.log('event', event);
  }

  passData() {
    this.commonService.passDataFromDemo.next({
      name: 'Angular',
      type: 'FrameWork'
    })
  }
}
