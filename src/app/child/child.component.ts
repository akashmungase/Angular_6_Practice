import { AfterContentInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterContentInit {

  @Input() fromParent: string;
  @Output() fromChild =  new EventEmitter<any>();

  @ViewChild('child') elementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  sendData() {
    this.fromChild.next('this is come from child component');
  }

  ngAfterContentInit(): void {
    this.elementRef.nativeElement.style.color = 'blue';
  }

}
