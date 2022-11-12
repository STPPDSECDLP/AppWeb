import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePediatraComponent } from './home-pediatra.component';

describe('HomePediatraComponent', () => {
  let component: HomePediatraComponent;
  let fixture: ComponentFixture<HomePediatraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePediatraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePediatraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
