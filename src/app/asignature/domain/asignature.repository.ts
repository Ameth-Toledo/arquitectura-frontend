import { Observable } from 'rxjs';
import { Asignature } from './entities/asignature.model';

export interface IAsignatureRepository {
  create(asignature: Asignature): Observable<Asignature>;
  update(id: string, asignature: Asignature): Observable<Asignature>;
  delete(id: string): Observable<void>;
  getById(id: string): Observable<Asignature>;
  getAll(): Observable<Asignature[]>;
}
