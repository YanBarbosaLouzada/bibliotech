import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { BibliotechService } from 'src/app/service/bibliotech.service';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-editar-livros',
  templateUrl: './editar-livros.component.html',
  styleUrls: ['./editar-livros.component.css']
})
export class EditarLivrosComponent implements OnInit {

    public livro!: Livro;
  
    public isLoadUpload: boolean = false;
  
    constructor(
      
      private bibliotecaService: BibliotechService,
      private router: Router,
      private route: ActivatedRoute,
      private uploadService: UploadService
    ) { }
  
    ngOnInit(): void {
      this.initilizeFields();
    }
  
    private initilizeFields(): void {
      const id = this.route.snapshot.params["id"];
      this.bibliotecaService.procurarPorId(id).subscribe(resposta => {
        this.livro = resposta;
      });
    }
  
    public atualizarLivro(form: NgForm): void {
      if(form.valid) {
        this.bibliotecaService.editarLivro(this.livro).subscribe(response => {
          alert("Atualizado com sucesso.");
          this.router.navigate(["/painel-de-controle"]);
        });
      }
      else {
        alert("Dados inválidos.");
      }
    }
  
    public atualizarCapa(event: any): void {
      this.isLoadUpload = true;
      const file: File = event.target.files[0];
      this.uploadService.carregarCapa(file).subscribe(uploadResult  => {
        this.isLoadUpload = false;
        const storageReference = uploadResult.ref;
        const promiseFileUrl = storageReference.getDownloadURL();
        promiseFileUrl.then((capa: string) => {
          this.livro.capa = capa;
        })
      });
    }

}
