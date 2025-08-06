import {
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { AvailableLocales, LocaleService } from '../../services/locale';

@Component({
  selector: 'app-basic',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic.html',
})
export class Basic {
  protected readonly localeService = inject(LocaleService);

  nameLower = signal('jhon');
  nameUpper = signal('JHON');
  fullName = signal('jHoN bOCaNegRa');
  date = signal(new Date());

  tickingDateEffect = effect((cleanUp) => {
    const interval = setInterval(() => {
      this.date.set(new Date());
      console.log('tick');
    }, 1000);

    cleanUp(() => {
      clearInterval(interval);
    });
  });

  changeLocale(locale: AvailableLocales) {
    this.localeService.changeLocale(locale);
    console.log({ locale });
  }
}
