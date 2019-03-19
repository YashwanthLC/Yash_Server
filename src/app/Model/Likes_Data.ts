export class Likes_Data
{
public profile_id:string;
public profile_pic:string;

constructor(ID:string,pic_url:string,text:string){
    this.profile_id=ID;
    this.profile_pic=pic_url;
}

}