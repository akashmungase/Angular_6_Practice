import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnDestroy {

  subscription : Subscription;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.subscription = this.commonService.passDataFromFirstToSecond.subscribe(result => {
      console.log('result', result);

    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
