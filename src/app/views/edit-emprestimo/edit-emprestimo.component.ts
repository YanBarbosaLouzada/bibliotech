import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprestimo } from 'src/app/models/emprestimo';
import { EmprestimoService } from 'src/app/service/emprestimo.service';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-edit-emprestimo',
  templateUrl: './edit-emprestimo.component.html',
  styleUrls: ['./edit-emprestimo.component.css']
})
export class EditEmprestimoComponent implements OnInit {

  

    public emprestimo!: Emprestimo;
  
    
  
    constructor(
      private emprestimoService: EmprestimoService,
      private router: Router,
      private route: ActivatedRoute,
      
    ) { }
  
    ngOnInit(): void {
      this.initilizeFields();
    }
  
    private initilizeFields(): void {
      const id = this.route.snapshot.params["id"];
      this.emprestimoService.idEmprestimo(id).subscribe(resposta => {
        this.emprestimo = resposta;
      });
    }
  
    public atulizarEmprestimo(form: NgForm): void {
      if(form.valid) {
        this.emprestimoService.editarEmprestimo(this.emprestimo).subscribe(resposta => {
          alert("Atualizado com sucesso.");
          this.router.navigate(["/emprestimo"]);
        });
      }
      else {
        alert("Dados inválidos.");
      }
    }
  
   
}
