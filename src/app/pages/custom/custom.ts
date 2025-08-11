import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case-pipe';
import { heroes } from '../../data/hero-data';
import { CanFlyPipe } from '../../pipes/can-fly-pipe';
import { HeroColorPipe } from '../../pipes/hero-color-pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color-pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator-pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by-pipe';
import type { Hero } from '../../interfaces/hero-interface';
import { HeroFilterPipe } from '../../pipes/hero-filter-pipe';

@Component({
  selector: 'app-custom',
  imports: [
    CanFlyPipe,
    HeroColorPipe,
    HeroCreatorPipe,
    HeroFilterPipe,
    HeroSortByPipe,
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
  sortBy = signal<keyof Hero | null>(null);
  searchQuery = signal('');

  toggleCase() {
    this.isUpper.set(!this.isUpper());
  }
}
