import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FormsModule } from '@angular/forms';
import { Asignature } from '../../../asignature/domain/entities/asignature.model';
import { GetAllAsignatureService } from '../../../asignature/application/get-all-asignature.service';
import { CreateAsignatureService } from '../../../asignature/application/create-asignature.service';
import { UpdateAsignatureService } from '../../../asignature/application/update-asignature.service';
import { DeleteAsignatureService } from '../../../asignature/application/delete-asignature.service';

@Component({
  selector: 'app-asignatures',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './asignatures.component.html',
  styleUrls: ['./asignatures.component.scss']
})
export class AsignaturesComponent implements OnInit {
  asignatures: Asignature[] = [];
  selectedAsignature: Asignature = {
    id_asignature: 0,
    name_asignature: '',
    description_asignature: ''
  };

  showAddModal: boolean = false;
  showEditModal: boolean = false;
  showDeleteModal: boolean = false;

  constructor(
    private getAllAsignaturesService: GetAllAsignatureService,
    private createAsignatureService: CreateAsignatureService,
    private updateAsignatureService: UpdateAsignatureService,
    private deleteAsignatureService: DeleteAsignatureService
  ) {}

  ngOnInit(): void {
    this.loadAsignatures();
  }

  loadAsignatures(): void {
    this.getAllAsignaturesService.execute().subscribe({
      next: (data: Asignature[]) => {
        this.asignatures = data;
      },
      error: (err) => {
        console.error("Error al cargar las asignaturas: ", err);
      }
    });
  }

  openAddModal(): void {
    this.selectedAsignature = {
      id_asignature: 0,
      name_asignature: '',
      description_asignature: ''
    };
    this.showAddModal = true;
  }

  openEditModal(asignature: Asignature): void {
    this.selectedAsignature = { ...asignature };
    this.showEditModal = true;
  }

  openDeleteModal(asignature: Asignature): void {
    this.selectedAsignature = asignature;
    this.showDeleteModal = true;
  }

  closeModal(): void {
    this.showAddModal = false;
    this.showEditModal = false;
    this.showDeleteModal = false;
  }

  addAsignature(): void {
    this.createAsignatureService.execute(this.selectedAsignature).subscribe({
      next: () => {
        this.loadAsignatures();
        this.closeModal();
      },
      error: (err) => {
        console.error("Error al agregar asignatura: ", err);
      }
    });
  }

  updateAsignature(): void {
    this.updateAsignatureService.execute(this.selectedAsignature.id_asignature, this.selectedAsignature).subscribe({
      next: () => {
        this.loadAsignatures();
        this.closeModal();
      },
      error: (err) => {
        console.error("Error al actualizar asignatura:", err);
      }
    });
  }

  deleteAsignature(): void {
    this.deleteAsignatureService.execute(this.selectedAsignature.id_asignature).subscribe({
      next: () => {
        this.loadAsignatures();
        this.closeModal();
      },
      error: (err) => {
        console.error("Error al eliminar asignatura:", err);
      }
    });
  }
}
