import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPediatraComponent } from './login-pediatra.component';

describe('LoginPediatraComponent', () => {
  let component: LoginPediatraComponent;
  let fixture: ComponentFixture<LoginPediatraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPediatraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPediatraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
