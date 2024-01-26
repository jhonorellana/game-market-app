import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'game-market-app';
  descripcion = 'Este es un sitio para venta de juegos'
  MostrarDescipcion: boolean = true;
  juegos: string[] = ['MArio Kart', 'AC1', 'Fifa 2023', 'minecraft'];

  haciendoClick(): void{
    alert('Has hecho click');
  }

  cuandoCambieAlgo(event: any): void{
      console.log('Escribiste: ', event.target.value);
  }

  pasaMouse(): void{
      console.log("Mouse sobre elemento");
  }

  saleMouse(){
    console.log("Mouse sale del elemento");
  }


}
