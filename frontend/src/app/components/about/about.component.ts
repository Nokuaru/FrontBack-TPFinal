import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  nosotros = [
    {
      name: "Facundo",
      lastname: "Tomas",
      description: "¿Por qué el programador front-end siempre lleva una chaqueta? Porque siempre trabaja con estilos.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUhV63pz0B2BWfx3cAu7ELHX6tbPj6xDt6g&usqp=CAU"
    },
    {
      name: "Gonzalo",
      lastname: "Olarte",
      description: "¿Por qué el desarrollador back-end siempre lleva una mochila? Porque siempre está cargando con la lógica del negocio.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKj7OuNRLGGUmDTNmw9cXJ9g0V3RqfpXkw2Q&usqp=CAU"
    },
    {
      name: "Tatiana",
      lastname: "Ainchil",
      description: "¿Cuál es el café favorito de un desarrollador back-end? El Expresso.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeYgB7jMmi3P7IOLTa_egEGycZKUEfRXUiQ&usqp=CAU"
    },
    {
      name: "Daniela",
      lastname: "Arriazu",
      description: "¿Qué le dice un servidor a otro? ¿Sabes qué hora es? Creo que es hora de actualizar nuestra base de datos.",
      image: "https://wallpapers.com/images/hd/confused-patrick-random-pfp-x63wp9vs43cem64s.jpg"
    }
  ];
}
