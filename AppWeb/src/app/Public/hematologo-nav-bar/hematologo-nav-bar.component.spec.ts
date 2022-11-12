import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HematologoNavBarComponent } from './hematologo-nav-bar.component';

describe('HematologoNavBarComponent', () => {
  let component: HematologoNavBarComponent;
  let fixture: ComponentFixture<HematologoNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HematologoNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HematologoNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
