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

  constructor(){
  }


  sendForm(form:Itarefa){
    this.tarefasApp.push({tarefa:form.tarefa, tempo:form.tempo})
  }

}
