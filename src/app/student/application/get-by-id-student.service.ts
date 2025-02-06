import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../domain/entities/student.model';
import { IStudentRepository } from '../domain/student.repository';

@Injectable({
  providedIn: 'root',
})
export class GetByIdStudentService {
  constructor(private studentRepository : IStudentRepository) {}

  execute(id: number): Observable<Student> {
    return this.studentRepository.getById(id);
  }
}
