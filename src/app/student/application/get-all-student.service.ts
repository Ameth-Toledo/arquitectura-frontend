import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../domain/entities/student.model';
import { IStudentRepository } from '../domain/student.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllAsignatureService {
  constructor(private studentRepository: IStudentRepository) {}

  execute(): Observable<Student[]> {
    return this.studentRepository.getAll();
  }
}
