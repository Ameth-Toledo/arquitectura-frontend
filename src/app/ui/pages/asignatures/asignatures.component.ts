import { Component, OnInit } from '@angular/core';
import { DriverAdapterHttpService } from '../../../asignature/infrastructure/driver-adapter-http/driver-adapter-http.service';
import { Asignature } from '../../../asignature/domain/entities/asignature.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-asignatures',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './asignatures.component.html',
  styleUrls: ['./asignatures.component.scss']
})
export class AsignaturesComponent implements OnInit {
  asignatures: Asignature[] = [];
  selectedAsignature: Asignature | null = null;
  newAsignature: Asignature = new Asignature(0, '', '');
  showEditModal = false;
  showDeleteModal = false;
  showAddModal = false;

  constructor(private asignatureService: DriverAdapterHttpService) {}

  ngOnInit(): void {
    this.loadAsignatures();
  }

  loadAsignatures(): void {
    this.asignatureService.getAll().subscribe(data => {
      console.log("Datos recibidos:", data);
      this.asignatures = data;
    }, error => {
      console.error("Error al cargar asignaturas:", error);
    });
  }  

  openAddModal(): void {
    this.newAsignature = new Asignature(0, '', '');
    this.showAddModal = true;
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  addAsignature(): void {
    if (!this.newAsignature.name.trim() || !this.newAsignature.description.trim()) {
      alert("Los campos no pueden estar vacíos.");
      console.error("Los campos no pueden estar vacíos.");
      return;
    }
  
    this.asignatureService.create(this.newAsignature).subscribe(() => {
      this.loadAsignatures();
      this.closeAddModal();
    });
  }
  

  openEditModal(asignature: Asignature): void {
    this.selectedAsignature = { ...asignature }; 
    this.showEditModal = true;
  }  

  closeEditModal(): void {
    this.showEditModal = false;
    this.selectedAsignature = null;
  }

  updateAsignature(): void {
    if (!this.selectedAsignature || !this.selectedAsignature.name.trim() || !this.selectedAsignature.description.trim()) {
      console.error("Los campos no pueden estar vacíos.");
      return;
    }
  
    this.asignatureService.update(this.selectedAsignature.id!, this.selectedAsignature)
      .subscribe(() => {
        this.loadAsignatures();
        this.closeEditModal();
      });
  }  

  openDeleteModal(asignature: Asignature): void {
    this.selectedAsignature = asignature;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedAsignature = null;
  }

  deleteAsignature(): void {
    if (!this.selectedAsignature || !this.selectedAsignature.id) {
      console.error("No se encontró el ID de la asignatura para eliminar.");
      return;
    }
  
    this.asignatureService.delete(this.selectedAsignature.id)
      .subscribe(() => {
        this.loadAsignatures();
        this.closeDeleteModal();
      });
  }  
}
