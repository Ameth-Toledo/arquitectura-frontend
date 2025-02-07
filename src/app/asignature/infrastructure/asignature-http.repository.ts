import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignature } from '../domain/entities/asignature.model';
import { IAsignatureRepository } from '../domain/asignature.repository';

@Injectable({
  providedIn: 'root',
})
export class AsignatureHttpRepository implements IAsignatureRepository {
  private apiUrl = 'http://localhost:3002/asignatures';

  constructor(private http: HttpClient) {}

  create(asignature: Asignature): Observable<Asignature> {
    return this.http.post<Asignature>(`${this.apiUrl}`, asignature);
  }

  update(id: string, asignature: Asignature): Observable<Asignature> {
    return this.http.put<Asignature>(`${this.apiUrl}/${id}`, asignature);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getById(id: string): Observable<Asignature> {
    return this.http.get<Asignature>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Asignature[]> {
    return this.http.get<Asignature[]>(this.apiUrl);
  }
}
