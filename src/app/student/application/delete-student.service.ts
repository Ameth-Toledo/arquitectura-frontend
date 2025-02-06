import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudentRepository } from '../domain/student.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteStudentService {
  constructor(private studentRepository : IStudentRepository) {}

  execute(id: number): Observable<void> {
    return this.studentRepository.delete(id);
  }
}