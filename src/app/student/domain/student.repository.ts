import { Observable } from "rxjs";
import { Student } from "./entities/student.model";

export interface IStudentRepository {
    create(student: Student): Observable<Student>;
    getAll(): Observable<Student[]>;
    getById(id: number): Observable<Student>;
    update(student: Student): Observable<Student>;
    delete(id: number): Observable<any>;
}
