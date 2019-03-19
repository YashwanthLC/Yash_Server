import {Likes_Data} from './Likes_Data';

export class Likes_model
{
public count:number;
public data:Likes_Data[];
constructor(count:number, data:Likes_Data[])
{
 this.count=count;
 this.data=data;
}

}