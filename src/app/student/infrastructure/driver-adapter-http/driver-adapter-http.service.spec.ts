import { TestBed } from '@angular/core/testing';

import { DriverAdapterHttpService } from './driver-adapter-http.service';

describe('DriverAdapterHttpService', () => {
  let service: DriverAdapterHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverAdapterHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
