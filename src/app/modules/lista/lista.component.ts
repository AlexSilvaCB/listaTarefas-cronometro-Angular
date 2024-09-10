import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

 tarefas = [{
    tarefa:'Angular',
    tempo:'02:00:00'
  }, {
    tarefa:'Typescript',
    tempo:'01:00:00'
  }, {
    tarefa:'Javascript',
    tempo:'01:30:00'
  }]

  constructor(){}

}
