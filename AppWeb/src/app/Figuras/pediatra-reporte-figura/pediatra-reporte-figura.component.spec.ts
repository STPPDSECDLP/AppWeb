import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatraReporteFiguraComponent } from './pediatra-reporte-figura.component';

describe('PediatraReporteFiguraComponent', () => {
  let component: PediatraReporteFiguraComponent;
  let fixture: ComponentFixture<PediatraReporteFiguraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PediatraReporteFiguraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PediatraReporteFiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
