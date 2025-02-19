import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignature } from '../domain/entities/asignature.model';
import { IAsignatureRepository } from '../domain/asignature.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllAsignatureService {
  constructor(private asignatureRepository: IAsignatureRepository) {}

  execute(): Observable<Asignature[]> {
    return this.asignatureRepository.getAll();
  }
}
