import { TestBed } from '@angular/core/testing';

import { DriverAdapterHttpServiceAsignature } from './driver-adapter-http.service';

describe('DriverAdapterHttpService', () => {
  let service: DriverAdapterHttpServiceAsignature;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverAdapterHttpServiceAsignature);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
