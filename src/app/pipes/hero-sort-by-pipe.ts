import { Pipe, PipeTransform } from '@angular/core';
import type { Hero } from '../interfaces/hero-interface';

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipe implements PipeTransform {
  transform(value: Hero[], sortBy: keyof Hero | null = null): Hero[] {
    if (!sortBy) return value;

    switch (true) {
      case sortBy === 'name':
        return value.sort((a, b) => a.name.localeCompare(b.name));
      case sortBy === 'canFly':
        return value.sort((a, b) => (a.canFly ? 1 : -1) - (b.canFly ? 1 : -1));
      case sortBy === 'color':
        return value.sort((a, b) => a.color - b.color);
      case sortBy === 'creator':
        return value.sort((a, b) => a.creator - b.creator);
    }

    return value.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
  }
}
