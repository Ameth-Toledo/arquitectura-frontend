import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../domain/entities/student.model';
import { IStudentRepository } from '../domain/student.repository';

@Injectable({
  providedIn: 'root',
})
export class CreateStudentService {
  constructor(private studentRepository: IStudentRepository) {}

  execute(student: Student): Observable<Student> {
    return this.studentRepository.create(student);
  }
}
