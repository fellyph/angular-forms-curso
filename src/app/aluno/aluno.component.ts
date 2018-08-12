import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno.model';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  public aluno: Aluno;

  constructor() {
    this.aluno = new Aluno('', '', '', '', '', '');
  }
  ngOnInit() { }

}
