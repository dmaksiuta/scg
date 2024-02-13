import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation/fade';
import { slideInAnimation } from '../animation/slide';
import { flyInOutAnimation } from '../animation/entry';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [fadeInAnimation, slideInAnimation, flyInOutAnimation],
})
export class HeaderComponent {
  public menuIsActive: boolean = false;
  public showPopup: boolean = false;

}
