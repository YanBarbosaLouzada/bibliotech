import { Injectable } from '@angular/core';
import { Livro } from '../models/livro';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BibliotechService {

  constructor(
    private firestore: AngularFirestore,
    
  ) { }

  public criarLivro(livro: Livro): Observable<any> {
    const promise = this.firestore.collection("bibliotech").add(livro);
    return from(promise).pipe(
      catchError(error => {
        alert("Erro ao criar livro")
        console.error(error);
        return EMPTY;
      })
    );
  }

  public listarLivros(): Observable<any> {
    const promise = this.firestore.collection("bibliotech").get();
    return from(promise).pipe(
      map((response: any) => {
        return response.docs.map((doc: any) => {
          const livros: Livro = doc.data() as Livro;
          livros.id = doc.id;  
          return livros;
        })
      }),
      catchError(error => {
        alert("Erro ao buscar dados.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public procurarPorId(id: string): Observable<any> {
    const promise = this.firestore.collection("bibliotech").doc(id).get();
    return from(promise).pipe(
      map(doc => {
        const livros: Livro = doc.data() as Livro;
        livros.id = doc.id;
        return livros;
      }),
      catchError(error => {
        alert("Erro ao buscar pelo id");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public deletarLivro(id: string) {
    const promise = this.firestore.collection("bibliotech").doc(id).delete();
    return from(promise).pipe(
      catchError(error => {
        alert("Erro ao excluir.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public editarLivro(livro: Livro) {
    const promise = this.firestore.collection("bibliotech").doc(livro.id).update(livro);
    return from(promise).pipe(
      catchError(error => {
        alert("Erro ao atualizar.");
        console.error(error);
        return EMPTY;
      })
    );
  }



}
