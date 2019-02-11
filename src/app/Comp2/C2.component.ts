import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'C2-section',
  templateUrl: './C2.component.html'
})
export class C2Component implements OnInit {
  title1 = 'Component-2';
  @Input() appName ;
constructor(){}
  ngOnInit(){}
}
