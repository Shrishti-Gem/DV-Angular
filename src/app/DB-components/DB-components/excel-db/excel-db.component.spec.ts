import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelDBComponent } from './excel-db.component';

describe('ExcelDBComponent', () => {
  let component: ExcelDBComponent;
  let fixture: ComponentFixture<ExcelDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
