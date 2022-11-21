import { TestBed } from '@angular/core/testing';

import { MedulaOseaService } from './medula-osea.service';

describe('MedulaOseaService', () => {
  let service: MedulaOseaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedulaOseaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
