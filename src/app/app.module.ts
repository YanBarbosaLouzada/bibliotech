import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { EditarLivrosComponent } from './views/editar-livros/editar-livros.component';
import { EmprestimosComponent } from './views/emprestimos/emprestimos.component';
import { LoginComponent } from './views/login/login.component';
import { PainelDeControleComponent } from './views/painel-de-controle/painel-de-controle.component';
import { BarraDeNavegacaoComponent } from './components/barra-de-navegacao/barra-de-navegacao.component';
import { MaterialModule } from 'src/material/material.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from'@angular/fire/compat'
import { NovoLivroCompoenent} from './views/novo-livro/novo-livro.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import { NovoEmprestimoComponent } from './views/novo-emprestimo/novo-emprestimo.component';
import { EditEmprestimoComponent } from './views/edit-emprestimo/edit-emprestimo.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { GuardsGuard } from './guards/guards.guard';

@NgModule({
  declarations: [
    AppComponent,
    BarraDeNavegacaoComponent,
    CadastroComponent,
    HomeComponent,
    EditarLivrosComponent,
    EmprestimosComponent,
    LoginComponent,
    PainelDeControleComponent,
    DetalhesComponent,
    NovoLivroCompoenent,
    NovoEmprestimoComponent,
    EditEmprestimoComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
