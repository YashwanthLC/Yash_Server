import { Component,Input } from '@angular/core';

@Component({
  selector: 'Text-section',
  templateUrl: './Text.component.html'
})
export class TextComponent {

@Input() textContent;

  // title='Needle Tree';
  // text_content = 'There were once two brothers who lived on the edge of a forest. The elder brother was very mean to his younger brother and ate up all the food and took all his good clothes. One day, the elder brother went into the forest to find some firewood to sell in the market. As he went around chopping the branches of a tree after tree, he came upon a magical tree. The tree said to him, ‘Oh kind sir, please do not cut my branches. If you spare me, I will give you my golden apples’.';
}
