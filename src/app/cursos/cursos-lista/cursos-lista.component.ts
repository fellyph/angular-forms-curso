import { Component, OnInit, Input } from '@angular/core';
import {Curso} from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent implements OnInit {
  @Input() public cursos = [];
  @Input() public tituloLista = 'Cursos';

  public totalLikes: number;

  constructor() { }

  ngOnInit() {
  }
}
