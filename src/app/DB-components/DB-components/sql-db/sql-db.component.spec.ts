import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlDbComponent } from './sql-db.component';

describe('SqlDbComponent', () => {
  let component: SqlDbComponent;
  let fixture: ComponentFixture<SqlDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlDbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
