import { Component, Input } from '@angular/core';

interface Tarefas{
  tarefa:string;
  tempo:string
}

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  @Input() public appTarefa!: Tarefas;
  //@Input() public appTempo!: string;


constructor(){}

}
