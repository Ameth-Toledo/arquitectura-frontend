import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignature } from '../../domain/entities/asignature.model';

@Injectable({
  providedIn: 'root'
})
export class DriverAdapterHttpServiceAsignature {
  private apiUrl = 'http://localhost:8080/asignatures'; 

  constructor(private http: HttpClient) { }

  getAll(): Observable<Asignature[]> {
    return this.http.get<Asignature[]>(this.apiUrl);
  }

  getById(id: number): Observable<Asignature> {
    return this.http.get<Asignature>(`${this.apiUrl}/${id}`);
  }

  create(asignature: Asignature): Observable<Asignature> {
    return this.http.post<Asignature>(this.apiUrl, asignature);
  }

  update(id: number, asignature: Asignature): Observable<Asignature> {
    return this.http.put<Asignature>(`${this.apiUrl}/${id}`, asignature);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
