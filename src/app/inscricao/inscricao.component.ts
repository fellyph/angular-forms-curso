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
  public idade: Number;
  public idadeInvalida: Boolean = false;
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

  validarIdade(event) {
    if (event >= 12 && event <= 120) {
      alert('valid');
      this.idadeInvalida = false;
    } else {
      alert('invalid');
      this.idadeInvalida = true;
    }
  }
}
