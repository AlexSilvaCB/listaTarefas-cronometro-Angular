import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
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
