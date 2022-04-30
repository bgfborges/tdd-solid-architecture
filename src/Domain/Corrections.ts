import { Entity } from "../core/domains/Entity";

type CorrectionProps = {
    grade: number;
    submission: string;
    creactedAt: Date;
}

export class Correction extends Entity<CorrectionProps> {

    private constructor(props: CorrectionProps, id?: string){
        super(props, id);
    }

    static create(props: CorrectionProps, id?: string){

        // I could Define Business Rules at Domain Level
        // But it's not the best way for further updates
        /* 
            if(props.grade < 0 || props.grade > 10){
                throw new Error('Cannot define a grade smaller than 0 and bigger than 10');
            } 
        */

        const correction = new Correction(props, id);

        return correction;

    }

}