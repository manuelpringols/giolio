import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Section01 } from "./sections/section-01/section-01";
import { Section02 } from "./sections/section-02/section-02";
import { Section03 } from "./sections/section-03/section-03";
import { Section04 } from "./sections/section-04/section-04";
import { Section05 } from "./sections/section-05/section-05";
import { Section07 } from "./sections/section-07/section-07";
import { Section08 } from "./sections/section-08/section-08";
import { Section06 } from "./sections/section-06/section-06";
import { Section09 } from "./sections/section-09/section-09";
import { Section10 } from "./sections/section-10/section-10";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Section02, Section01, Section03, Section04, Section05, Section07, Section08, Section06, Section09, Section10],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('giolio');
}
