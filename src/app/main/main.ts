import { Component } from '@angular/core';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-main',
  imports: [NgxMaskDirective],
  standalone: true,
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class MainComponent {
  open = false;

  verify() {
    this.open = !this.open;
  }
}
