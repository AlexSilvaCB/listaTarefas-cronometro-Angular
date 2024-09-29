import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.scss'
})
export class BotaoComponent {

  @Input() public btnTexto!: string;
  @Input() public btnType?:string = "button"

  constructor(){}

}
