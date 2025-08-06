import { Injectable, signal } from '@angular/core';

export type AvailableLocales = 'es' | 'en' | 'fr';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private currentLocale = signal<AvailableLocales>('fr');

  constructor() {
    const storedLocale =
      (localStorage.getItem('locale') as AvailableLocales) ?? 'es';

    this.currentLocale.set(storedLocale);
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: AvailableLocales) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
