import { TestBed } from '@angular/core/testing';

import { WebSocketService } from './driver-adapter-amqp.service';

describe('DriverAdapterAmqpService', () => {
  let service: WebSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
