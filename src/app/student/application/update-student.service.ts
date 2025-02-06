import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from '../domain/entities/student.model';
import { IStudentRepository } from '../domain/student.repository';

@Injectable({
    providedIn: 'root',
})
export class UpdateStudentService {
    constructor(private studentRepository : IStudentRepository) {}

    execute(id: number, student: Student): Observable<Student> {
        return this.studentRepository.update(id, student);
    }
}