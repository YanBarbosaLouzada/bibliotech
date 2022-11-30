import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Emprestimo } from 'src/app/models/emprestimo';
import { Livro } from 'src/app/models/livro';
import { BibliotechService } from 'src/app/service/bibliotech.service';
import { EmprestimoService } from 'src/app/service/emprestimo.service';
import { UploadService } from 'src/app/service/upload.service';
import { PainelDeControleComponent } from '../painel-de-controle/painel-de-controle.component';

@Component({
  selector: 'app-novo-emprestimo',
  templateUrl: './novo-emprestimo.component.html',
  styleUrls: ['./novo-emprestimo.component.css']
})
export class NovoEmprestimoComponent implements OnInit {

   livros: Livro[]=[] 

  
  
  public formEmprestimo: FormGroup;
  private capa: string = "";
  public isLoadUpload: boolean = false;

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor(fb: FormBuilder,
    private emprestimoService: EmprestimoService,
    private bibliotecaService: BibliotechService,
    private router: Router,
    private uploadService: UploadService,
   
    
  ){  this.formEmprestimo = fb.group({
      livro: [null, [Validators.required,]],
      nomeLeitor: ["", [Validators.required]],
      statusEmprestimo: ["", [Validators.required]],
      telefone: ["", [Validators.required]],
      email: ["", [Validators.required,Validators.email]],
    })

  }

   addEmprestimo() {
    if (this.formEmprestimo.valid) {
      const emprestimo: Emprestimo = this.formEmprestimo.value;
      emprestimo.dataEmprestimo = new Date().toLocaleString()
      this.emprestimoService.criarEmprestimo(emprestimo).subscribe(resposta => {
        alert("Castrado com sucesso")
        this.router.navigate(["/emprestimo"])
      })
      // Enviando para o banco de dados 
    } else {
      alert("Dados inválidos")
      console.error

    }
  }

  iniciarDadosLivros(){
    this.bibliotecaService.listarLivros().subscribe(livros =>{
      this.livros = livros
    })
  }

  
  
   

  

  ngOnInit(): void {
    this.iniciarDadosLivros()
  }

}
