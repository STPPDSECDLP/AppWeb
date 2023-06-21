import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangrePerifericaVisualizarComponent } from './sangre-periferica-visualizar.component';

describe('SangrePerifericaVisualizarComponent', () => {
  let component: SangrePerifericaVisualizarComponent;
  let fixture: ComponentFixture<SangrePerifericaVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SangrePerifericaVisualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SangrePerifericaVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
