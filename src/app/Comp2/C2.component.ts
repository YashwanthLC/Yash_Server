import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';


@Component({
  selector: 'C2-section',
  templateUrl: './C2.component.html',
  styleUrls:['./C2.component.css']
})
export class C2Component implements OnInit {
  title1 = 'Component-2';
 // Namelst:Array<any>=[{"App":"Arsenal"},{"App":"Barca"},{"App":"Dortmund"}];
  @Input() appName ;
  
  // @Output() name: EventEmitter<any> = new EventEmitter<any>();
  // sample()
  // {
  //     this.name.emit(this.Namelst);
  // }  
constructor(){}
  ngOnInit(){}
}
