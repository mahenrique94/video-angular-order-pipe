import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  people = [
    { name: 'Matheus' },
    { name: 'João' },
    { name: 'Rodrigo' },
    { name: 'Camila' },
    { name: 'Talita' },
    { name: 'Patricia' },
    { name: 'Cesar'}
  ];

}
