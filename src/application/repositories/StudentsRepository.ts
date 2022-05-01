import { Student } from "../../Domain/Student";

export interface StudentsRepository {
    findById(id: string): Promise<Student | null>;
}