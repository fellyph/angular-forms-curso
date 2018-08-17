import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno.model';
import { FormGroup , FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  public aluno: Aluno;
  public alunoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.aluno = new Aluno('', '', '', '', '', '');
    this.alunoForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.pattern('[A-Za-z]{2,20}')]],
      sobrenome: ['', Validators.required],
      profissao: '',
      cidade: '',
      estado: ['', [Validators.maxLength(2), Validators.pattern('[A-Z]{2}')]],
      emails: this.formBuilder.group({
        email: '',
        confirmaEmail: ''
      }, {validator: this.validaEmail}),
      newsletter: false
    });
  }

  validaEmail(control: AbstractControl) {
    const email = control.get('email');
    const confEmail = control.get('confirmaEmail');

    if (email.pristine || confEmail.pristine) {
      return null;
    }

    if (email.value === confEmail.value) {
      return null;
    }

    return {'nomatch': true};
  }

  limparNome() {
    this.alunoForm.patchValue({
      nome: ''
    });
  }

  limparForm() {
    this.alunoForm.setValue({
      nome: '',
      sobrenome: '',
      profissao: '',
      cidade: '',
      estado: '',
      email: ''
    });
  }

  setEmailValidation(setEmail) {
    const inputEmail = this.alunoForm.get('emails.email');
    const inputConfEmail = this.alunoForm.get('emails.confirmaEmail');
    if (setEmail === true) {
      inputEmail.setValidators(Validators.required);
      inputConfEmail.setValidators(Validators.required);
    } else {
      inputEmail.clearValidators();
      inputConfEmail.clearValidators();
    }

    inputEmail.updateValueAndValidity();
    inputConfEmail.updateValueAndValidity();
  }
}
