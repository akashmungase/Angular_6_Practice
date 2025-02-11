import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildArrayComponent } from './child-array.component';

describe('ChildArrayComponent', () => {
  let component: ChildArrayComponent;
  let fixture: ComponentFixture<ChildArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
