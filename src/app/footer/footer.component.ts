import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation/fadeIn';

@Component({
  selector: 'scg-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  animations: [fadeInAnimation],
})
export class FooterComponent {

}
