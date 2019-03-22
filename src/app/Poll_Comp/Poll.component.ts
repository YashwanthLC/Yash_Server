import { Component, Input } from '@angular/core';

@Component({
  selector: 'Poll-section',
  templateUrl: './Poll.component.html'
})
export class PollComponent {
  @Input() Poll_Cmp;
}
