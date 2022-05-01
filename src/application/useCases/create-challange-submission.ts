import { Submission } from "../../Domain/Submission";
import { ChallangesRepository } from "../repositories/ChallangesRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";

type CreateChallangeSubmissionRequest = {
    studentId: string;
    challangeId: string;
}

export class CreateChallangeSubmission {

    constructor(
        private studentsRepository: StudentsRepository,
        private chalangeRepository: ChallangesRepository,
    ){}

    async execute({ studentId, challangeId}: CreateChallangeSubmissionRequest) {

        const student = await this.studentsRepository.findById(studentId);

        if(!student){
            throw new Error('Student does not exist');
        }
        
        const challange = await this.chalangeRepository.findById(challangeId);

        if(!challange){
            throw new Error('Challange does not exist');
        }

        const submission = Submission.create({
            studentId,
            challangeId
        });

        return submission
    }
}