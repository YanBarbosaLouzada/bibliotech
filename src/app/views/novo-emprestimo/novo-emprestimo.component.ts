import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Emprestimo } from 'src/app/models/emprestimo';
import { Livro } from 'src/app/models/livro';
import { EmprestimoService } from 'src/app/service/emprestimo.service';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-novo-emprestimo',
  templateUrl: './novo-emprestimo.component.html',
  styleUrls: ['./novo-emprestimo.component.css']
})
export class NovoEmprestimoComponent implements OnInit {
  public formEmprestimo: FormGroup;

  private capa: string = "";
  public isLoadUpload: boolean = false;

  constructor(fb: FormBuilder,
    private emprestimoService: EmprestimoService,
    private router: Router,
    private uploadService: UploadService,
    

  ){  this.formEmprestimo = fb.group({
      titulo: ["", [Validators.required,]],
      nomeLeitor: ["", [Validators.required]],
      dataEmprestimo: ["", [Validators.required]],
      statusEmprestimo: ["", [Validators.required]],
      telefone: ["", [Validators.required]],
      email: ["", [Validators.required,Validators.email]],
    })

  }
   addEmprestimo() {
    if (this.formEmprestimo.valid) {
      const emprestimo: Emprestimo = this.formEmprestimo.value;
      //FOTO URL DOI FEITO DPS
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



  ngOnInit(): void {
  }

}
