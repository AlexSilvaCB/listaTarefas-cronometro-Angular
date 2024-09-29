import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BotaoComponent } from '../botao/botao.component';
import { RelogioComponent } from './relogio/relogio.component';
import { tempoParaSegundos } from '../../common/utils/time';

@Component({
  selector: 'app-cronometro',
  standalone: true,
  imports: [BotaoComponent, RelogioComponent],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.scss'
})
export class CronometroComponent {
  @Input() public appInputCronometro!: string
  @Output() public tarefaConcluidaOutput = new EventEmitter<boolean>();
  sendRelogio:number=0
  sendConcluido!:boolean

  constructor(){}

  regressiva(contator: number = tempoParaSegundos(this.appInputCronometro)){
    setTimeout(()=> {
      if (contator > 0) {
        this.sendRelogio = contator - 1;
          return this.regressiva(contator - 1);
      }
      this.tarefaConcluidaOutput.emit(this.sendConcluido = true)
  }, 1000)
  }

}
