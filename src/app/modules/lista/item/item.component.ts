import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Itarefa } from '../../../Itypes/Itarefa';


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, MatListModule, MatDividerModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  @Input() public appInputItem!: Itarefa;
  @Output() public itemOutputSelecionada = new EventEmitter<Itarefa>();

constructor(){}

selecionarTarefa(tarefas:Itarefa ){
  this.itemOutputSelecionada.emit(tarefas)
 }
}
