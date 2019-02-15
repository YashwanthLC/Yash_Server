import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'C2-section',
  templateUrl: './C2.component.html'
})
export class C2Component implements OnInit {
  title1 = 'Component-2';
  @Input() appName ;
  // @Output() Vals = new EventEmitter<appName>(); 
constructor(){}
  ngOnInit(){}
}
