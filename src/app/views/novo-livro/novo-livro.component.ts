import { EmptyExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event, Route, Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { BibliotechService } from 'src/app/service/bibliotech.service';
import { UploadService } from 'src/app/service/upload.service';


@Component({
  selector: 'app-novo-livro',
  templateUrl: './novo-livro.component.html',
  styleUrls: ['./novo-livro.component.css']
})
export class NovoLivroCompoenent implements OnInit {

  public formLivro: FormGroup;

  private capa: string = "";
  public isLoadUpload: boolean = false;

  constructor(fb: FormBuilder,
    private BibliotechService: BibliotechService,
    private router: Router,
    private uploadService: UploadService

  ){  this.formLivro = fb.group({
      titulo: ["", [Validators.required,]],
      isbn: ["", [Validators.required]],
      autor: ["", [Validators.required]],
      categoria: ["", [Validators.required]],
      status: ["", [Validators.required]],
 
    })

  }
   addLivro() {
    if (this.formLivro.valid) {
      const livro: Livro = this.formLivro.value;
      //FOTO URL DOI FEITO DPS
      livro.capa = this.capa
      this.BibliotechService.criarLivro(livro).subscribe(resposta => {
        alert("Castrado com sucesso")
        this.router.navigate(["/painel-de-controle"])
      })
      // Enviando para o banco de dados 
    } else {
      alert("Dados inválidos")
      console.error

    }
  }
  public carregarCapa(event: any): void {
    this.isLoadUpload = true;
    const file: File = event.target.files[0];
    this.uploadService.carregarCapa(file).subscribe(uploadResult => {
      this.isLoadUpload = false;
      const storageReference = uploadResult.ref;
      const promiseFileUrl = storageReference.getDownloadURL();
      promiseFileUrl.then((capa: string) => {
        this.capa = capa;
        console.log(capa);
      })
    });
  } 



  ngOnInit(): void {
  }

}
