import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSidePaginationComponent } from './client-side-pagination.component';

describe('ClientSidePaginationComponent', () => {
  let component: ClientSidePaginationComponent;
  let fixture: ComponentFixture<ClientSidePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSidePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSidePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
