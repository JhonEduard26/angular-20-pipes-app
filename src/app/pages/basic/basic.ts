import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic.html',
})
export class Basic {
  nameLower = signal('jhon');
  nameUpper = signal('JHON');
  fullName = signal('jHoN bOCaNegRa');
}
