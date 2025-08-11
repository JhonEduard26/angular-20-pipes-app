import { Pipe, PipeTransform } from '@angular/core';
import type { Hero } from '../interfaces/hero-interface';

@Pipe({
  name: 'heroFilter',
})
export class HeroFilterPipe implements PipeTransform {
  transform(value: Hero[], search: string): Hero[] {
    if (!search.trim()) return value;

    search = search.toLowerCase();
    return value.filter((hero) => hero.name.toLowerCase().includes(search));
  }
}
