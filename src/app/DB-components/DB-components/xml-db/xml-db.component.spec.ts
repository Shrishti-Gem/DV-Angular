import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlDBComponent } from './xml-db.component';

describe('XmlDBComponent', () => {
  let component: XmlDBComponent;
  let fixture: ComponentFixture<XmlDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmlDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XmlDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
