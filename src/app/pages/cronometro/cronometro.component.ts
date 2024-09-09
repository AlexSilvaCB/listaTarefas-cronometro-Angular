import { Component } from '@angular/core';
import { FormularioComponent } from '../../modules/formulario/formulario.component';
import { ListaComponent } from '../../modules/lista/lista.component';

@Component({
  selector: 'app-cronometro',
  standalone: true,
  imports: [FormularioComponent, ListaComponent],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.scss'
})
export class CronometroComponent {

}
