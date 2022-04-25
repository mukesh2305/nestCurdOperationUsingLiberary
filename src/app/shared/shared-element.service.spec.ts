import { TestBed } from '@angular/core/testing';

import { SharedElementService } from './shared-element.service';

describe('SharedElementService', () => {
  let service: SharedElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
