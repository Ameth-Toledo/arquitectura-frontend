import { Observable } from 'rxjs';
import { Asignature } from './entities/asignature.model';

export abstract class IAsignatureRepository {
  abstract create(asignature: Asignature): Observable<Asignature>;
  abstract update(id: number, asignature: Asignature): Observable<Asignature>;
  abstract delete(id: number): Observable<void>;
  abstract getById(id: number): Observable<Asignature>;
  abstract getAll(): Observable<Asignature[]>;
}
