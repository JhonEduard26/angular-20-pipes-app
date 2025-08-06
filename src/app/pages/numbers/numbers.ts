import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './numbers.html',
  styles: ``,
})
export class Numbers {
  totalSells = signal(2_433_232.5567);
  percent = signal(0.4856);
}
