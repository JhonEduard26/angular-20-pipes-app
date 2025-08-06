import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
} from '@angular/common';

const client1 = {
  name: 'John',
  gender: 'male',
  age: 22,
  address: 'Bogotá, Colombia',
};

const client2 = {
  name: 'Jane',
  gender: 'female',
  age: 30,
  address: 'New York, USA',
};

@Component({
  selector: 'app-uncommon',
  imports: [
    AsyncPipe,
    Card,
    I18nPluralPipe,
    I18nSelectPipe,
    JsonPipe,
    KeyValuePipe,
    SlicePipe,
    TitleCasePipe,
  ],
  templateUrl: './uncommon.html',
  styles: ``,
})
export class Uncommon {
  // i18n
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  // i18nPlural
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  clients = signal([
    'John',
    'Jane',
    'Claire',
    'Leon',
    'Michael',
    'Sarah',
    'Emily',
    'David',
  ]);

  deleteClient() {
    this.clients.update((prevClients) => prevClients.slice(1));
  }

  // keyvalue pipe
  profile = {
    name: 'Ashley',
    age: 18,
    address: 'Los Angeles, USA',
  };

  // async pipe

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);

    console.log('Promise created');
  });
}
