import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAndGridComponent } from './list-and-grid.component';

describe('ListAndGridComponent', () => {
  let component: ListAndGridComponent;
  let fixture: ComponentFixture<ListAndGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAndGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAndGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
