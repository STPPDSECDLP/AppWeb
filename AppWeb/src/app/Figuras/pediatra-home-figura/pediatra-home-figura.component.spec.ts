import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatraHomeFiguraComponent } from './pediatra-home-figura.component';

describe('PediatraHomeFiguraComponent', () => {
  let component: PediatraHomeFiguraComponent;
  let fixture: ComponentFixture<PediatraHomeFiguraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PediatraHomeFiguraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PediatraHomeFiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
