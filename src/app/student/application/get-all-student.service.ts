import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Student } from '../domain/entities/student.model';
import { IStudentRepository } from '../domain/student.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllStudentService {
  constructor(private studentRepository : IStudentRepository) {}

  execute(): Observable<Student[]> {
    return this.studentRepository.getAll().pipe(
      tap(data => console.log("📡 Datos recibidos en GetAllStudentService:", data))
    );
  }  
}
