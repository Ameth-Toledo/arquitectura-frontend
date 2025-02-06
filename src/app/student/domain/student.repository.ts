import { Observable } from "rxjs";
import { Student } from "./entities/student.model";

export abstract class IStudentRepository {
    abstract create(student: Student): Observable<Student>;
    abstract getAll(): Observable<Student[]>;
    abstract getById(id: number): Observable<Student>;
    abstract update(id: number, student: Student): Observable<Student>; 
    abstract delete(id: number): Observable<void>;
}
