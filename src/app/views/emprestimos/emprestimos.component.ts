import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesComponent } from 'src/app/components/detalhes/detalhes.component';
import { Emprestimo } from 'src/app/models/emprestimo';
import { Livro } from 'src/app/models/livro';
import { BibliotechService } from 'src/app/service/bibliotech.service';
import { EmprestimoService } from 'src/app/service/emprestimo.service';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.css']
})
export class EmprestimosComponent implements OnInit {

  displayedColumns = ['capa','tituloLivro','nomeLeitor','dataEmprestimo','statusEmprestimo','email','telefone','editar','deletar'];
  dataSource: Emprestimo[] = [];



  constructor(private emprestimoService: EmprestimoService,

    private dialog: MatDialog) { }


  iniciarTabela() {
    this.emprestimoService.listarEmprestimo().subscribe(emprestimo => {
      this.dataSource = emprestimo;
    })
  }

  ngOnInit(): void {
    this.iniciarTabela()
  }

    deletarEmprestimo(id: string) {
    this.emprestimoService.deletarEmprestimo(id).subscribe(resposta => {
      alert("Apagado")
      this.iniciarTabela()
    })
  }

  //mostrando caixa de dialogo com informacoes do livro
  abrirDetalhes(livro: Livro) {
    this.dialog.open(DetalhesComponent, {
      width: "400px",
      data: livro
    })
  }

}
