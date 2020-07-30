import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesreplistComponent } from './salesreplist.component';

describe('SalesreplistComponent', () => {
  let component: SalesreplistComponent;
  let fixture: ComponentFixture<SalesreplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesreplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesreplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
