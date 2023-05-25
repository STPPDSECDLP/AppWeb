import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangrePerifericaComponent } from './sangre-periferica.component';

describe('SangrePerifericaComponent', () => {
  let component: SangrePerifericaComponent;
  let fixture: ComponentFixture<SangrePerifericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SangrePerifericaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SangrePerifericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
