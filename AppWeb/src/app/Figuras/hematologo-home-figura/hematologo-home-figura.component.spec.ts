import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HematologoHomeFiguraComponent } from './hematologo-home-figura.component';

describe('HematologoHomeFiguraComponent', () => {
  let component: HematologoHomeFiguraComponent;
  let fixture: ComponentFixture<HematologoHomeFiguraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HematologoHomeFiguraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HematologoHomeFiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
