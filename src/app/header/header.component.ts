import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation/fade';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [fadeInAnimation],
})
export class HeaderComponent {
  public menuIsActive: boolean = false;

}
