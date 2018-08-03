import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno.model';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {
  public mensagem = '';
  public nome: String;
  public aluno: Aluno;
  public curso: String;
  public cursos;
  public cursosFiltrados;

  constructor(private cursosService: CursosService) {
    this.aluno = new Aluno('Fellyph', 'cintra', 'desenvolvedor', 'Caruaru', 'Pernambuco', 'fellyph@imedia.com.br');
  }

  ngOnInit() {
    this.cursosService.getCursos().subscribe(dados => this.cursos = dados);
  }

  salvar() {
    this.mensagem = 'Salvando dados...';
  }

  filtrarCursos (event) {
    this.cursosFiltrados = this.cursos.filter( curso => curso.categoria === event);
  }
}
