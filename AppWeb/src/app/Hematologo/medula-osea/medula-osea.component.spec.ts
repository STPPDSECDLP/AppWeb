import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedulaOseaComponent } from './medula-osea.component';

describe('MedulaOseaComponent', () => {
  let component: MedulaOseaComponent;
  let fixture: ComponentFixture<MedulaOseaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedulaOseaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedulaOseaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
