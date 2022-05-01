import { ChallangesRepository } from "../../src/application/repositories/ChallangesRepository";
import { Challange } from "../../src/Domain/Challange";

export class InMemoryChallangeRepository implements ChallangesRepository {

    public items: Challange[] = [];

    async findById(id: string): Promise<Challange | null>{
        const challange = this.items.find(challange => challange.id === id);

        if(!challange){
            return null;
        }

        return challange;
    }
}