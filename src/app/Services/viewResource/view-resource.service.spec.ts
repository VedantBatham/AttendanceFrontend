import { TestBed } from '@angular/core/testing';

import { ViewResourceService } from './view-resource.service';

describe('ViewResourceService', () => {
  let service: ViewResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
