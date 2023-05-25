import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedulaOseaVisualizarComponent } from './medula-osea-visualizar.component';

describe('MedulaOseaVisualizarComponent', () => {
  let component: MedulaOseaVisualizarComponent;
  let fixture: ComponentFixture<MedulaOseaVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedulaOseaVisualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedulaOseaVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
