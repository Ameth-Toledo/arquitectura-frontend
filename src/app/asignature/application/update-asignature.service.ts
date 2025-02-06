import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { IAsignatureRepository } from "../domain/asignature.repository";
import { Asignature } from "../domain/entities/asignature.model";

@Injectable({
    providedIn: 'root',
})
export class UpdateAsignatureService {
    constructor(private asignatureRepository: IAsignatureRepository) {}

    execute(id: number, asignature: Asignature): Observable<Asignature> {
        return this.asignatureRepository.update(id, asignature);
    }
}