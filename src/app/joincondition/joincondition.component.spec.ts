import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoinconditionComponent } from './joincondition.component';

describe('JoinconditionComponent', () => {
  let component: JoinconditionComponent;
  let fixture: ComponentFixture<JoinconditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinconditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});