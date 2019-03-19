import { Cat1_Data } from './Cat1_Data';
import { Cat0_Data } from './Cat0_Data';
import { Cat2_Data } from './Cat2_Data';


export class Main_Category {
    public type: number;
    public data0: Cat0_Data;
    public data1: Cat1_Data;
    public data2: Cat2_Data;
    public MainData: object;
    constructor(type: number, data1:Cat1_Data, data0:Cat0_Data, data2:Cat2_Data) {
        this.type = type;
        this.data0 = data0;
        this.data1 = data1;
        this.data2 = data2;
    }


    ngOnInit(){
        if ( this.type==0)
        this.MainData=this.data0;
        else if ( this.type==1)
        this.MainData=this.data1;
        else
        this.MainData=this.data2;
      }
}