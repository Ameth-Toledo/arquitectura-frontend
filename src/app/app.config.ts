import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { DriverAdapterHttpServiceStudent } from './student/infrastructure/driver-adapter-http/driver-adapter-http.service';
import { IStudentRepository } from './student/domain/student.repository'; 
import { DriverAdapterHttpServiceAsignature } from './asignature/infrastructure/driver-adapter-http/driver-adapter-http.service';
import { IAsignatureRepository } from './asignature/domain/asignature.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    { provide: IStudentRepository, useClass: DriverAdapterHttpServiceStudent },
    { provide: IAsignatureRepository, useClass: DriverAdapterHttpServiceAsignature}
  ]
};
