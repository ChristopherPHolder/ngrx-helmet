import { TestBed } from '@angular/core/testing';

import { MetaHelmet } from './meta-helmet.service';

describe('MetaService', () => {
  let service: MetaHelmet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaHelmet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
