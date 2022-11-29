import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesComponent } from 'src/app/components/detalhes/detalhes.component';
import { Livro } from 'src/app/models/livro';
import { BibliotechService } from 'src/app/service/bibliotech.service';

@Component({
  selector: 'app-painel-de-controle',
  templateUrl: './painel-de-controle.component.html',
  styleUrls: ['./painel-de-controle.component.css']
})
export class PainelDeControleComponent implements OnInit {

  displayedColumns = ['capa', 'autor', 'categoria', 'isbn','titulo', 'status', 'editar','deletar'];
  dataSource: Livro[] = [];



  constructor(private biblioteca: BibliotechService,

    private dialog: MatDialog) { }


  iniciarTabela() {
    this.biblioteca.listarLivros().subscribe(livro => {
      this.dataSource = livro;
    })
  }

  ngOnInit(): void {
    this.iniciarTabela()
  }

    deletarLivro(id: string) {
    this.biblioteca.deletarLivro(id).subscribe(resposta => {
      alert("Apagado")
      this.iniciarTabela()
    })
  }

  //mostrando caixa de dialogo com informacoes do colaborador
  abrirDetalhes(livro: Livro) {
    this.dialog.open(DetalhesComponent, {
      width: "400px",
      data: livro
    })
  }



}
