import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { Itarefa } from '../../Itypes/Itarefa';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [ItemComponent, MatListModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent{

  @Input() appInputLista!:Itarefa[];
  @Output() public listaOutputSelecionada = new EventEmitter<Itarefa>();

  constructor(){ }

  updateTarefas(tarefa:Itarefa){
   this.listaOutputSelecionada.emit(tarefa)
  }

}
