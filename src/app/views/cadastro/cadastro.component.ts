import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'firebase/auth';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/service/auth.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {


formCadastro: FormGroup;

constructor(fb:FormBuilder,
  private authService: AuthService,
  private router:Router){

  this.formCadastro =fb.group({
    email:["",[Validators.required,Validators.email]],
    senha:["",[Validators.required]]
  })
}
 
entraGoogle(){
  this.authService.autenticarGoogle().subscribe(resposta=>{
    alert('Sejá Bem-vindo');
    this.router.navigate(['/home']);
  })
}

public cadastra(){
  if(this.formCadastro.valid){
    const usuario: Usuario = this.formCadastro.value
    this.authService.cadastroSenhaeEmail(usuario).subscribe(resposta=>{
      alert('Usuário cadastrado')
      this.router.navigate(["/home"])
    })
  }else{alert('Dados invalidos')}
}


}
