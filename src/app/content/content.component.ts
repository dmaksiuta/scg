import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation/fadeIn';
import { slideInAnimation } from '../animation/slideIn';

@Component({
  selector: 'scg-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  animations: [fadeInAnimation, slideInAnimation]
})
export class ContentComponent {

}
