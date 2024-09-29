import { Component, effect, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-relogio',
  standalone: true,
  imports: [],
  templateUrl: './relogio.component.html',
  styleUrl: './relogio.component.scss'
})
export class RelogioComponent implements OnChanges{

  @Input() public appInputRelogio:number = 0

  segundoDezena:string = "00"
  minutoDezena:string = "00"

constructor(){ }

  ngOnChanges(changes: SimpleChanges): void {
    this.inserirContador(changes['appInputRelogio'].currentValue)
  }

inserirContador(tempo:number){
  let segundos = Math.floor(tempo/ 60);
  let minutos = Math.floor(tempo % 60);

  this.segundoDezena = segundos.toString().padStart(2,"0")
  this.minutoDezena =  minutos.toString().padStart(2,"0")
}

}
