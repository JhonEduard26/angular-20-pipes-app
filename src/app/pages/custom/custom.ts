import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case-pipe';
import { heroes } from '../../data/hero-data';
import { CanFlyPipe } from '../../pipes/can-fly-pipe';
import { HeroColorPipe } from '../../pipes/hero-color-pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color-pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator-pipe';

@Component({
  selector: 'app-custom',
  imports: [
    CanFlyPipe,
    HeroColorPipe,
    HeroCreatorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    ToggleCasePipe,
  ],
  templateUrl: './custom.html',
  styles: ``,
})
export class Custom {
  name = signal('Jhon Bocanegra');
  isUpper = signal(false);
  heroes = signal(heroes);

  toggleCase() {
    this.isUpper.set(!this.isUpper());
  }
}
