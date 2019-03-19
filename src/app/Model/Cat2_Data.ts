export class Cat2_Data {
    public question:string;
    public option: Array<{id:string, text:string, select_count:number}>;
    constructor(question: string, option:Array<{id:string, text:string, select_count:number}> ) {
        this.question=question;
        this.option = option;
    }

}