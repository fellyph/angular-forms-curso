import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../curso';
import { Location } from '@angular/common';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  public curso: Curso;

  constructor(
      private rotaAtual: ActivatedRoute,
      private cursosService: CursosService,
      private location: Location
    ) { }

  ngOnInit() {
    const id = Number(this.rotaAtual.snapshot.paramMap.get('id'));
    this.curso = this.cursosService.getCurso(id);
  }

  voltar() {
    this.location.back();
  }

}
