import { Component, EventEmitter, inject, Output } from '@angular/core';
import { BotaoComponent } from '../botao/botao.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Itarefa } from '../../Itypes/Itarefa';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [BotaoComponent, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  @Output() public formLista = new EventEmitter<Itarefa>();

  #fb = inject(FormBuilder)

  tarefas = this.#fb.nonNullable.group({
    tarefa: ['', [Validators.required]],
    tempo: ['00:00', [Validators.required]]
  })

  constructor(){}

  newTarefa(){
    this.formLista.emit(this.tarefas.getRawValue())
    this.tarefas.reset()
  }

}
