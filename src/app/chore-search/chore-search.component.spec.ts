import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreSearchComponent } from './chore-search.component';

describe('ChoreSearchComponent', () => {
  let component: ChoreSearchComponent;
  let fixture: ComponentFixture<ChoreSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoreSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoreSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
