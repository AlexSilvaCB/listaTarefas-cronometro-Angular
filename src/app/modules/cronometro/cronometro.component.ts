import { Component } from '@angular/core';
import { BotaoComponent } from '../botao/botao.component';
import { RelogioComponent } from './relogio/relogio.component';

@Component({
  selector: 'app-cronometro',
  standalone: true,
  imports: [BotaoComponent, RelogioComponent],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.scss'
})
export class CronometroComponent {

}
