import { Component, Input } from '@angular/core';
import { Itarefa } from '../../../Itypes/Itarefa';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  @Input() public appTarefa!: Itarefa;


constructor(){}

}
