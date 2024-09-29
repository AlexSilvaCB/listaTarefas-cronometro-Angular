import { Component, signal } from '@angular/core';
import { FormularioComponent } from '../../modules/formulario/formulario.component';
import { ListaComponent } from '../../modules/lista/lista.component';
import { CronometroComponent } from '../../modules/cronometro/cronometro.component';
import { Itarefa } from '../../Itypes/Itarefa';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [FormularioComponent, ListaComponent, CronometroComponent],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.scss'
})
export class TarefaComponent {

 public tarefasApp: Itarefa[] = []
 public sendTempo!: string
 public ultimatarefa!:string

  constructor(){ }

  sendForm(form:Itarefa){
    this.tarefasApp.push(form)
  }

  updateTarefa(itemLista: Itarefa){
    this.tarefasApp = this.tarefasApp.map(tarefaUp => {
        return {...tarefaUp, selecionado: tarefaUp.tarefa === itemLista.tarefa ? true : false};
      }
  )
  this.ultimatarefa = itemLista.tarefa
  this.sendTempo = itemLista.tempo
  }

  finalizarTarefa(concluido:boolean){

    if (concluido) {
      this.tarefasApp = this.tarefasApp.map(tarefaUp => {
        if(tarefaUp.tarefa === this.ultimatarefa)
          {
        return {...tarefaUp, concluido: true};
      }
        return tarefaUp
      })
      return;
    }
    }




}
