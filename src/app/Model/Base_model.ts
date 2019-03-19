import { Comments_model } from '../Model/Comments_Model';
import { Likes_model } from '../Model/Likes_Model';
import { Main_Category } from '../Model/Category';


export class Base_Model {
    public profile_name: string;
    public profilepic_url: string;
    public comments: Comments_model;
    public likes: Likes_model;
    public category:Main_Category;
    constructor(name: string,pic_url: string, comments: Comments_model, likes: Likes_model, cat:Main_Category) {
        this.profile_name = name;
        this.profilepic_url = pic_url;
        this.comments = comments;
        this.likes = likes;
        this.category=cat;
       
    }
    
}