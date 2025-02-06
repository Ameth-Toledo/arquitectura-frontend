import { Observable } from "rxjs";
import { Student } from "./entities/student.model";

export interface IStudentRepository {
    create(student: Student): Observable<Student>;
    getAll(): Observable<Student[]>;
    getById(id: number): Observable<Student>;
    update(id: number, student: Student): Observable<Student>; // Corregido
    delete(id: number): Observable<void>;
}
