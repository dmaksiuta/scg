import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'scg-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'title', content: 'SWISS CYBER GATE' });
    this.meta.addTag({ name: 'description', content: 'Anwendungsbeispiel for secure transfer of your files. Secure Transfers. Swiss Made.' });
    this.meta.addTag({ name: 'keywords', content: 'SWISS CYBER GATE, Anwendungsbeispiel, Secure transfer, Files, Swiss Made' });
    this.meta.addTag({ name: 'author', content: 'Oli Kessler' });
   }
}
