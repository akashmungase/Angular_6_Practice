import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.css']
})
export class DialComponent implements OnInit, OnDestroy {

  @Input() fromParent: string;
  @Output() fromChild =  new EventEmitter<any>();

  subscription: Subscription;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    // console.log('fromParent', this.fromParent);
    // this.fromChild.emit('this is from child');

    this.subscription = this.commonService.passDataFromDemo.subscribe(data => {
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
