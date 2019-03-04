import { Component, Input } from '@angular/core';

@Component({
  selector: 'C4-section',
  templateUrl: './C4.component.html'
})
export class C4Component {
  title1 = 'Component-4';
  @Input() appName2;
}
