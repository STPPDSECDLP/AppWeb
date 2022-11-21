import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HematologoMedulaOseaFiguraComponent } from './hematologo-medula-osea-figura.component';

describe('HematologoMedulaOseaFiguraComponent', () => {
  let component: HematologoMedulaOseaFiguraComponent;
  let fixture: ComponentFixture<HematologoMedulaOseaFiguraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HematologoMedulaOseaFiguraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HematologoMedulaOseaFiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
