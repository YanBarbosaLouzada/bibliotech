import { Injectable } from '@angular/core';
import { Livro } from '../models/livro';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Emprestimo } from '../models/emprestimo';


@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

constructor(
    private firestore: AngularFirestore,
    
  ) { }

  public criarEmprestimo(emprestimo: Emprestimo): Observable<any> {
    const promise = this.firestore.collection("emprestimo").add(emprestimo);
    return from(promise).pipe(
      catchError(error => {
        alert("Erro ao criar Emprestimo")
        console.error(error);
        return EMPTY;
      })
    );
  }

  public listarEmprestimo(): Observable<any> {
    const promise = this.firestore.collection("emprestimo").get();
    return from(promise).pipe(
      map((response: any) => {
        return response.docs.map((doc: any) => {
          const emprestimo: Emprestimo = doc.data() as Emprestimo;
          emprestimo.id = doc.id;  
          return emprestimo;
        })
      }),
      catchError(error => {
        alert("Erro ao buscar dados.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public idEmprestimo(id: string): Observable<any> {
    const promise = this.firestore.collection("emprestimo").doc(id).get();
    return from(promise).pipe(
      map(doc => {
        const emprestimo: Emprestimo = doc.data() as Emprestimo;
        emprestimo.id = doc.id;
        return emprestimo;
      }),
      catchError(error => {
        alert("Erro ao buscar pelo id");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public deletarEmprestimo(id: string) {
    const promise = this.firestore.collection("emprestimo").doc(id).delete();
    return from(promise).pipe(
      catchError(error => {
        alert("Erro ao excluir.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public editarEmprestimo(emprestimo: Emprestimo) {
    const promise = this.firestore.collection("emprestimo").doc(emprestimo.id).update(emprestimo);
    return from(promise).pipe(
      catchError(error => {
        alert("Erro ao atualizar.");
        console.error(error);
        return EMPTY;
      })
    );
  }



}
