import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  bmi: number;
  resultado_: string;
  interpretacion_: string;

  constructor(private route: ActivatedRoute) {
    // console.log(route.snapshot.paramMap.get('valor'));

    this.resultado_ = '';
    this.interpretacion_ = "";
    this.bmi = +route.snapshot.paramMap.get('valor')!;
   
   }

  ngOnInit(): void {
    // Metodo llamada cuando se inicializa el componetente. inicio de vida del componeten
    this.getResultado();
  }

  getResultado(){

    if( this.bmi >= 25)
    {
      this.resultado_ = "Exceso de peso";
      this.interpretacion_ = "Tienes un peso corporal superior al normal. Intente hacer mas Ejercicio"
    }
    else if(this.bmi >= 18.5)
    {
      this.resultado_ = "Normal";
      this.interpretacion_ = "Tienes un peso corporal normal. Buen trabajo!"
    }
    else
    {
      this.resultado_ = "Peso muy Bajo";
      this.interpretacion_ = "Tienes un peso corporal mas bajo al normal. Puedes comer un poco mas" 
    }

  }

}
