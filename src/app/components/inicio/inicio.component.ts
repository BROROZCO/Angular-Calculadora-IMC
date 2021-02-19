import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad = 25;
  peso = 60;
  altura = 170;
  sexo = 'Femenino';

  // Esto es un comentario 


  constructor() { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any)
  {
    // console.log(event.target.value);
    this.altura = event.target.value;
  }

  masculino()
  {
    this.sexo = 'Masculino';
  }

  femenino()
  {
    this.sexo = 'Femenino';
  }

}
