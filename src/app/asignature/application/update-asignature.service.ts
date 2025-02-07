import { Injectable } from '@angular/core';
import { Asignature } from '../domain/entities/asignature.model';
import { IAsignatureRepository } from '../domain/asignature.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateAsignatureService {
  constructor(private asignatureRepository: IAsignatureRepository) {}

  execute(asignature: Asignature): Observable<Asignature> {
    return this.asignatureRepository.update(asignature);
  }
}
