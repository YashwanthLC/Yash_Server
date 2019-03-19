import {Comment_Data} from './Comment_Data';

export class Comments_model
{
public count:number;
public data:Comment_Data[];
constructor(count:number, data:Comment_Data[])
{
 this.count=count;
 this.data=data;
}

}