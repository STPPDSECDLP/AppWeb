import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHematologoComponent } from './login-hematologo.component';

describe('LoginHematologoComponent', () => {
  let component: LoginHematologoComponent;
  let fixture: ComponentFixture<LoginHematologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginHematologoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginHematologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
