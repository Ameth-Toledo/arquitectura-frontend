import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../domain/entities/student.model';
import { IStudentRepository } from '../../domain/student.repository';

@Injectable({
  providedIn: 'root'
})
export class DriverAdapterHttpService implements IStudentRepository {

  private apiUrl = 'http://localhost:8080/students/';

  constructor(private http: HttpClient) { }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  getById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}${id}`);
  }

  update(id: number, student: Student): Observable<Student> {  // Corregido
    return this.http.put<Student>(`${this.apiUrl}${id}`, student);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}
