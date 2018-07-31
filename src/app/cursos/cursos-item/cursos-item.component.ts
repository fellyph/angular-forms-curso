import { Component, OnInit, Input } from '@angular/core';
import {Curso} from '../curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos-item',
  templateUrl: './cursos-item.component.html',
  styleUrls: ['./cursos-item.component.css']
})
export class CursosItemComponent implements OnInit {
  public counter = 0;
  @Input() curso: Curso;

  constructor(private cursoService: CursosService) { }

  ngOnInit() {
  }

  favoritar() {
   this.cursoService.favoritarCurso.emit(this.curso);
  }

  curtir() {
    this.counter++;
    this.cursoService.cursoCurtido.emit(this.curso);
  }
}
