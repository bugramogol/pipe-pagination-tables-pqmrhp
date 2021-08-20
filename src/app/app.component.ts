import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  heros = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
    { id: 21, name: 'Mr. Nice' },
    { id: 22, name: 'Narco' },
    { id: 23, name: 'Bombasto' },
    { id: 24, name: 'Celeritas' },
    { id: 25, name: 'Magneta' },
    { id: 26, name: 'RubberMan' },
    { id: 27, name: 'Dynama' },
    { id: 28, name: 'Dr IQ' },
    { id: 29, name: 'Magma' },
    { id: 30, name: 'Tornado' },
    { id: 31, name: 'Mr. Nice' },
    { id: 32, name: 'Narco' },
    { id: 33, name: 'Bombasto' },
    { id: 34, name: 'Celeritas' },
    { id: 35, name: 'Magneta' },
    { id: 36, name: 'RubberMan' },
    { id: 37, name: 'Dynama' },
    { id: 38, name: 'Dr IQ' },
    { id: 39, name: 'Magma' },
    { id: 40, name: 'Tornado' },
    { id: 38, name: 'Dr IQ' },
    { id: 39, name: 'Magma' },
    { id: 40, name: 'Tornado' }
  ];

  page = 1;
  pageSize = 10;


}
