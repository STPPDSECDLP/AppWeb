import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedulaOseaEditComponent } from './medula-osea-edit.component';

describe('MedulaOseaEditComponent', () => {
  let component: MedulaOseaEditComponent;
  let fixture: ComponentFixture<MedulaOseaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedulaOseaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedulaOseaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
