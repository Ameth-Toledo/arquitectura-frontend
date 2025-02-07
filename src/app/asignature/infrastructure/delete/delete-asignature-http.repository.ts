import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeleteAsignatureHttpRepository {
  private readonly apiUrl = 'http://localhost:3000/api/asignatures';

  constructor(private http: HttpClient) {}

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
