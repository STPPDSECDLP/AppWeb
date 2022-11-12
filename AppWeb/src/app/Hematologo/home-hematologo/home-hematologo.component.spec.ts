import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHematologoComponent } from './home-hematologo.component';

describe('HomeHematologoComponent', () => {
  let component: HomeHematologoComponent;
  let fixture: ComponentFixture<HomeHematologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHematologoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHematologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
