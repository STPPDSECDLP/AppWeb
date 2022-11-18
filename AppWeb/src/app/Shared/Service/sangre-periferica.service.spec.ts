import { TestBed } from '@angular/core/testing';

import { SangrePerifericaService } from './sangre-periferica.service';

describe('SangrePerifericaService', () => {
  let service: SangrePerifericaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SangrePerifericaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
