import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFigurasComponent } from './perfil-figuras.component';

describe('PerfilFigurasComponent', () => {
  let component: PerfilFigurasComponent;
  let fixture: ComponentFixture<PerfilFigurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilFigurasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilFigurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
