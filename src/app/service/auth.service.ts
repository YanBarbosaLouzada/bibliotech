import { Injectable } from '@angular/core';
import { catchError, EMPTY, from, Observable } from 'rxjs';
import { GoogleAuthProvider, User } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth,
  ) { }

  public autenticarGoogle(): Observable<any> {
    const provedor = new GoogleAuthProvider();
    const promise = this.firebaseAuth.signInWithPopup(provedor)
    return from(promise).pipe(
      catchError(error => {
        alert("Não foi possivel autenticar com Google")
        console.error(error)
        return EMPTY;
      })
    )
  }
  sairDoSistema() {
    const promise = this.firebaseAuth.signOut()
    return from(promise)
  }

  cadastroSenhaeEmail(usuario: Usuario) {
    const { email, senha } = usuario
    const promise = this.firebaseAuth.createUserWithEmailAndPassword(email, senha)
    return from(promise).pipe(catchError(error => {
      console.error(error)
      return EMPTY
    }))

  }

  autenticarSenhaeEmail(usuario: Usuario) {
    const { email, senha } = usuario
    const promise = this.firebaseAuth.signInWithEmailAndPassword(email, senha)
    return from(promise).pipe(catchError(error => {
      if (error.code == "auth/user-not-found") {
        alert('Usuario nao foi encontrado')
      } else if (error.code == "auth/wrong-password") {
        alert('Senha Incorreta')
      } else {
        alert('Ocorreu um erro ao se autenticar')
        console.error(error)
      }
      return EMPTY
    }))

  }


}
