import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatraNavBarComponent } from './pediatra-nav-bar.component';

describe('PediatraNavBarComponent', () => {
  let component: PediatraNavBarComponent;
  let fixture: ComponentFixture<PediatraNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PediatraNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PediatraNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
