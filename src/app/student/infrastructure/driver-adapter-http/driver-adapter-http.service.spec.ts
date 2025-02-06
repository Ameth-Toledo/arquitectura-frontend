import { TestBed } from '@angular/core/testing';

import { DriverAdapterHttpServiceStudent } from './driver-adapter-http.service';

describe('DriverAdapterHttpService', () => {
  let service: DriverAdapterHttpServiceStudent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverAdapterHttpServiceStudent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
