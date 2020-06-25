import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQueriesComponent } from './add-queries.component';

describe('AddQueriesComponent', () => {
  let component: AddQueriesComponent;
  let fixture: ComponentFixture<AddQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
