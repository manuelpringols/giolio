import { Component } from '@angular/core';

@Component({
  selector: 'app-section-03',
  imports: [],
  templateUrl: './section-03.html',
  styleUrl: './section-03.css',
})
export class Section03 {
activePoster: string | null = null;

zoom(src: string, event: Event) {
  event.stopPropagation();
  this.activePoster = src;
}

closeZoom() {
  this.activePoster = null;
}

}
