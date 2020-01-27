import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDisplayDetailsComponent } from './card-display-details.component';

describe('CardDisplayDetailsComponent', () => {
  let component: CardDisplayDetailsComponent;
  let fixture: ComponentFixture<CardDisplayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDisplayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDisplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
