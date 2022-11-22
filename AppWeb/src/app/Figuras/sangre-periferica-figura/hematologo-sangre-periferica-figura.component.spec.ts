import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HematologoSangrePerifericaFiguraComponent } from './hematologo-sangre-periferica-figura.component';

describe('HematologoSangrePerifericaFiguraComponent', () => {
  let component: HematologoSangrePerifericaFiguraComponent;
  let fixture: ComponentFixture<HematologoSangrePerifericaFiguraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HematologoSangrePerifericaFiguraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HematologoSangrePerifericaFiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
