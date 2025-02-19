import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAsignatureRepository } from '../domain/asignature.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteAsignatureService {
  constructor(private asignatureRepository: IAsignatureRepository) {}

  execute(id: number): Observable<void> {
    return this.asignatureRepository.delete(id);
  }
}