import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { GetAllStudentService } from '../../../student/application/get-all-student.service';
import { CreateStudentService } from '../../../student/application/create-student.service';
import { UpdateStudentService } from '../../../student/application/update-student.service';
import { DeleteStudentService } from '../../../student/application/delete-student.service';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../student/domain/entities/student.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student = { 
    id_student: 0, 
    name_student: '', 
    last_name_student: '', 
    matricule_student: '', 
    age_student: 0 
  };

  isAddModalOpen: boolean = false;
  isEditModalOpen: boolean = false;
  isDeleteModalOpen: boolean = false;

  constructor(
    private getAllStudentsService: GetAllStudentService,
    private createStudentService: CreateStudentService,
    private updateStudentService: UpdateStudentService,
    private deleteStudentService: DeleteStudentService
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.getAllStudentsService.execute().subscribe({
      next: (data: Student[]) => {
        this.students = data;
      },
      error: (err) => {
        console.error("Error al cargar estudiantes:", err);
      }
    });
  }

  openAddStudentModal(): void {
    this.selectedStudent = { 
      id_student: 0, 
      name_student: '', 
      last_name_student: '', 
      matricule_student: '', 
      age_student: 0 
    };
    this.isAddModalOpen = true;
  }

  openEditStudentModal(student: Student): void {
    this.selectedStudent = { ...student };
    this.isEditModalOpen = true;
  }

  openDeleteStudentModal(student: Student): void {
    this.selectedStudent = student;
    this.isDeleteModalOpen = true;
  }

  closeModal(): void {
    this.isAddModalOpen = false;
    this.isEditModalOpen = false;
    this.isDeleteModalOpen = false;
  }

  addStudent(): void {
    this.createStudentService.execute(this.selectedStudent).subscribe({
      next: () => {
        this.loadStudents();
        this.closeModal();
      },
      error: (err) => {
        console.error("Error al agregar estudiante:", err);
      }
    });
  }

  updateStudent(): void {
    this.updateStudentService.execute(this.selectedStudent.id_student, this.selectedStudent).subscribe({
      next: () => {
        this.loadStudents();
        this.closeModal();
      },
      error: (err) => {
        console.error("Error al actualizar estudiante:", err);
      }
    });
  }

  deleteStudent(): void {
    this.deleteStudentService.execute(this.selectedStudent.id_student).subscribe({
      next: () => {
        this.loadStudents();
        this.closeModal();
      },
      error: (err) => {
        console.error("Error al eliminar estudiante:", err);
      }
    });
  }
}
