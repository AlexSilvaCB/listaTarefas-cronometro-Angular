import { Component, Input } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { Itarefa } from '../../Itypes/Itarefa';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent{

  @Input() appLista!:Itarefa[];

  constructor(){
  }
}
