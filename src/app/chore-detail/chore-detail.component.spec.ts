import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreDetailComponent } from './chore-detail.component';

describe('ChoreDetailComponent', () => {
  let component: ChoreDetailComponent;
  let fixture: ComponentFixture<ChoreDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoreDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
