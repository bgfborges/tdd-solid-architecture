import { InMemoryChallangeRepository } from "../../../tests/repository/in-memory-challanges-repository";
import { InMemoryStudentRepository } from "../../../tests/repository/in-memory-students-repository";
import { Challange } from "../../Domain/Challange";
import { Student } from "../../Domain/Student";
import { CreateChallangeSubmission } from "./create-challange-submission";

describe('Create Challange Submission useCase', () => {
    it('should be able to create a new test submission', async () => {

        const studentsRepository = new InMemoryStudentRepository();
        const challangesRepository = new InMemoryChallangeRepository();

        const student = Student.create({
            name: 'Gabriel Borges',
            email: 'bgfborges@gmail.com'
        });

        const challange = Challange.create({
            instructionUrl: '/challange-url',
            title: 'Task Number #1 - NodeJS'
        })

        studentsRepository.items.push(student);
        challangesRepository.items.push(challange);

        const sut = new CreateChallangeSubmission(studentsRepository, challangesRepository);

        const result = await sut.execute({
            studentId: student.id,
            challangeId: challange.id
        });

        expect(result).toBeTruthy();
    });
});