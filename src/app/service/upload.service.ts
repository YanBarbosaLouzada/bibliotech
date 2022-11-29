import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { from, EMPTY } from 'rxjs'
import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private storage: AngularFireStorage,) { }


  carregarCapa(photo: File) {
    const promise = this.storage.upload(`fotos/${Date.now()}`, photo)
    return from(promise).pipe(
      catchError(error => {
        alert("Erro ao fazer upload")
        console.error
        return EMPTY;
      })
    )
  }










}
