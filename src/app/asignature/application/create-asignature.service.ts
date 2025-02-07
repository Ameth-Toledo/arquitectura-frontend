import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignature } from '../domain/entities/asignature.model';
import { IAsignatureRepository } from '../domain/asignature.repository';

@Injectable({
  providedIn: 'root',
})
export class CreateAsignatureService {
  constructor(@Inject('IAsignatureRepository') private asignatureRepository: IAsignatureRepository) {}

  execute(asignature: Asignature): Observable<Asignature> {
    return this.asignatureRepository.create(asignature);
  }
}
