import { Challange } from "../../Domain/Challange";

export interface ChallangesRepository {
    findById(id: string): Promise<Challange | null>;
}