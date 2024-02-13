import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation/fade';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  animations: [fadeInAnimation],
})
export class FooterComponent {

}
