import { Submission } from "../../Domain/Submission";

type CreateChallangeSubmissionRequest = {
    studentId: string;
    challangeId: string;
}

export class CreateChallangeSubmission {
    execute({ studentId, challangeId}: CreateChallangeSubmissionRequest) {
        const submission = Submission.create({
            studentId,
            challangeId
        });

        return submission
    }
}