import { Component,Input } from '@angular/core';


@Component({
  selector: 'Comments-Comp',
  templateUrl: './Comments_Comp.html'
})
export class CommentsComponent {
       @Input() Comments;

  
}
