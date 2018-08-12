import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno.model';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  public aluno: Aluno;
  public alunoForm: FormGroup;

  constructor() {
  }
  ngOnInit() {
    this.aluno = new Aluno('', '', '', '', '', '');
    this.alunoForm = new FormGroup({
      nome: new FormControl(),
      sobrenome: new FormControl(),
      profissao: new FormControl(),
      cidade: new FormControl(),
      estado: new FormControl(),
      email: new FormControl()
    });


  }

}
