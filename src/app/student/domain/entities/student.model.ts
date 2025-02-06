export class Student {
    id_student: number;
    name_student: string;
    last_name_student: string;
    matricule_student: string;
    age_student: number;
  
    constructor(id_student: number, name_student: string, last_name_student: string, matricule_student: string, age_student: number) {
      this.id_student = id_student;
      this.name_student = name_student;
      this.last_name_student = last_name_student;
      this.matricule_student = matricule_student;
      this.age_student = age_student;
    }
  }
  