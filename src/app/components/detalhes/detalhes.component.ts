import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Livro } from 'src/app/models/livro';
import { AvatarPipe } from 'src/app/service/pipes.service';
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {
  constructor(@Inject(MAT_DIALOG_DATA)public livro: Livro,){}

}
