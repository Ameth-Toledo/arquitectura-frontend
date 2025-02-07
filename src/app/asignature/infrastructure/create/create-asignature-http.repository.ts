import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignature } from '../../domain/entities/asignature.model';

@Injectable({
  providedIn: 'root',
})
export class CreateAsignatureHttpRepository {
  private readonly apiUrl = 'http://localhost:3000/api/asignatures';

  constructor(private http: HttpClient) {}

  create(asignature: Asignature): Observable<Asignature> {
    return this.http.post<Asignature>(this.apiUrl, asignature);
  }
}
