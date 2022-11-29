import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { EditEmprestimoComponent } from './views/edit-emprestimo/edit-emprestimo.component';
import { EditarLivrosComponent } from './views/editar-livros/editar-livros.component';
import { EmprestimosComponent } from './views/emprestimos/emprestimos.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NovoEmprestimoComponent } from './views/novo-emprestimo/novo-emprestimo.component';
import { NovoLivroCompoenent } from './views/novo-livro/novo-livro.component';
import { PainelDeControleComponent } from './views/painel-de-controle/painel-de-controle.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"home"
  },
  {
    path:"home",
    component:HomeComponent,
    /* canActivate:[AuthGuard], */
    title:"Home | Bibliotech"
  },
  {
    path:"cadastro",
    component:CadastroComponent,
    title:"Cadastro | Bibliotech"
  },
  {
    path:"emprestimos",
    component:EmprestimosComponent,
    title:"Emprestimos | Bibliotech"
  },
  {
    path:"livros",
    component:EditarLivrosComponent,
    title:"Livros | Bibliotech"
  },
  {
    path:"login",
    component:LoginComponent,
    title:"Login | Bibliotech"
  },
  {
    path:"painel-de-controle",
    component:PainelDeControleComponent,
    title:"Controle | Bibliotech"
  },
  {
    path:"novo-livro",
    component:NovoLivroCompoenent,
    title: "Novo Livro | Bibliotech"
  },
  {
    path:"editar-livro/:id",
    component:EditarLivrosComponent,
    title: "Editar Livro | Bibliotech"
  },
  {
    path:"emprestimo",
    component:EmprestimosComponent,
    title: "Emprestimos | Bibliotech"
  },
  {
    path:"edit-emprestimo/:id",
    component:EditEmprestimoComponent,
    title: "Edit-Emprestimos | Bibliotech"
  },
  {
    path:"novo-emprestimo",
    component:NovoEmprestimoComponent,
    title: "Novo-Emprestimos | Bibliotech"
  },
  
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
