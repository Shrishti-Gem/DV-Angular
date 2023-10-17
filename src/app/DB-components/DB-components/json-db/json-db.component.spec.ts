import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDBComponent } from './json-db.component';

describe('JsonDBComponent', () => {
  let component: JsonDBComponent;
  let fixture: ComponentFixture<JsonDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
