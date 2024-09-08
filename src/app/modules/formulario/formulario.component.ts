import { Component } from '@angular/core';
import { BotaoComponent } from '../botao/botao.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [BotaoComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

}
