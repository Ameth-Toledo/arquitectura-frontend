import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: Socket;
  private notificationSubject = new Subject<string>();

  constructor() {
    this.socket = io('http://3.232.89.200:4004'); 

    this.socket.on('nuevaCola', (message: string) => {
      this.notificationSubject.next(message);
    });
  }

  getNotification() {
    return this.notificationSubject.asObservable();
  }
}
