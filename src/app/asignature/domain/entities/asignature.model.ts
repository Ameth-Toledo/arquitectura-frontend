export class Asignature {
  id_asignature: number;
  name_asignature: string;
  description_asignature: string;

  constructor(id_asignature: number, name_asignature: string, description_asignature: string) {
    this.id_asignature = id_asignature;
    this.name_asignature = name_asignature;
    this.description_asignature = description_asignature;
  }
}
