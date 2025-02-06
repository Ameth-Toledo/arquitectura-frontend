import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignature } from '../domain/entities/asignature.model';
import { IAsignatureRepository } from '../domain/asignature.repository';

@Injectable({
  providedIn: 'root',
})
export class GetByIdAsignatureService {
  constructor(private asignatureRepository: IAsignatureRepository) {}

  execute(id: number): Observable<Asignature> {
    return this.asignatureRepository.getById(id);
  }
}
