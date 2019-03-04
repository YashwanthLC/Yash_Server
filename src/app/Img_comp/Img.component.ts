import { Component,Input } from '@angular/core';

@Component({
  selector: 'Img-section',
  templateUrl: './Img.component.html'
})
export class ImgComponent {
  
  @Input() URL ;
  // Image_list:Object =[
  //   {"path":"../../assets/images/Desert.jpg"}
  //   //  {"path":"../../assets/images/Chrysanthemum.jpg"},
  //   //  {"path":"../../assets/images/Penguins.jpg"},
  //   //  {"path":"../../assets/images/Koala.jpg"}
   
  // ]

  
}
