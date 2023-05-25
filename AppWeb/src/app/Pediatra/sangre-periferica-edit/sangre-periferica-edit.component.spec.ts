import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangrePerifericaEditComponent } from './sangre-periferica-edit.component';

describe('SangrePerifericaEditComponent', () => {
  let component: SangrePerifericaEditComponent;
  let fixture: ComponentFixture<SangrePerifericaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SangrePerifericaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SangrePerifericaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
