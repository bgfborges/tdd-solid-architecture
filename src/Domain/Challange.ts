import { Entity } from "../core/domains/Entity";

type ChallangeProps = {
    title: string;
    instructionUrl: string;
}

export class Challange extends Entity<ChallangeProps> {

    private constructor(props: ChallangeProps, id?:string){
        super(props, id);
    }

    get id(){
        return this._id;
    }

    static create(props: ChallangeProps, id?: string){

        const challange = new Challange(props, id);

        return challange;
    }

}