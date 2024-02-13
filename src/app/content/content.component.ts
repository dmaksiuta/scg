import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation/fade';
import { slideInAnimation } from '../animation/slide';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  animations: [fadeInAnimation, slideInAnimation]
})
export class ContentComponent {

}
