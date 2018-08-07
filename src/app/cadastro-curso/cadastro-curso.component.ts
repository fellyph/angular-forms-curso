import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,  FormArray} from '@angular/forms';

@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css']
})
export class CadastroCursoComponent implements OnInit {
  cadastroCurso: FormGroup;
  palavrasChaveControls: FormArray;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.cadastroCurso = this.formBuilder.group({
      nomeCurso: this.formBuilder.control(null),
      categoriaCurso: this.formBuilder.control(null),
      cargaCurso: this.formBuilder.control(null),
      adicionaisCurso: this.formBuilder.group({
        apostilaImpressa: this.formBuilder.control(null),
        megaCoffeeBreak: this.formBuilder.control(null),
        acessoVideoAula: this.formBuilder.control(null)
      }),
      palavrasChave: this.formBuilder.array([
        this.formBuilder.control(null)
      ])
    });
    this.palavrasChaveControls = this.cadastroCurso.get('palavraChave') as FormArray;
  }

  addPalavraChave () {
    this.palavrasChaveControls.push(this.formBuilder.control(null));
  }

  onRemoveRequest(index) {
    this.palavrasChaveControls.removeAt(index);
  }

}
