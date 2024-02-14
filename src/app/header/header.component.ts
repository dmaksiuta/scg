import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation/fadeIn';
import { slideInAnimation } from '../animation/slideIn';
import { flyInOutAnimation } from '../animation/flyInOut';


@Component({
  selector: 'scg-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [fadeInAnimation, slideInAnimation, flyInOutAnimation],
})
export class HeaderComponent {
  public menuIsActive: boolean = false;
  public showPopup: boolean = false;

}
