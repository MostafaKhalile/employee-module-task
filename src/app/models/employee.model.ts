export class Employee {
  id: number;
  name: string;
  code: string;
  department: string;
  birthDate: string;
  gender: string;
  constructor(
    id: number,
    name: string,
    code: string,
    department: string,
    birthDate: string,
    gender: string
  ) {
    (this.id = id), (this.name = name);
    this.code = code;
    this.department = department;
    this.birthDate = birthDate;
    this.gender = gender;
  }
}
