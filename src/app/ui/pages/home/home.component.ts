import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Student } from '../../../student/domain/entities/student.model';
import { DriverAdapterHttpService } from '../../../student/infrastructure/driver-adapter-http/driver-adapter-http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: DriverAdapterHttpService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getAll().subscribe(data => {
      this.students = data;
    });
  }
}