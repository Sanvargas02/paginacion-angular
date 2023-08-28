import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Página donde estamos
  page: number = 1;

  // collection: any[] = someArrayOfThings;

  //Colección de datos traidos desde el back a listar
  collection: any[]  = [
    {
      id: 1,
      title: 'La Carreta',
      date: '02/04/2023'
    },
    {
      id: 2,
      title: 'Paragón Plaza',
      date: '02/04/2022'
    },
    {
      id: 3,
      title: 'Carne a la Llanera',
      date: '02/04/2021'
    },
    {
      id: 4,
      title: 'Otro restaurant',
      date: '02/04/2020'
    },
    {
      id: 5,
      title: 'Ultima búsqueda',
      date: '02/04/2019'
    },
    {
      id: 6,
      title: 'La Carreta',
      date: '02/04/2023'
    },
    {
      id: 7,
      title: 'Paragón Plaza',
      date: '02/04/2022'
    },
    {
      id: 8,
      title: 'Carne a la Llanera',
      date: '02/04/2021'
    },
    {
      id: 9,
      title: 'Otro restaurant',
      date: '02/04/2020'
    },
    {
      id: 10,
      title: 'Ultima búsqueda',
      date: '02/04/2019'
    }
  ]
}
