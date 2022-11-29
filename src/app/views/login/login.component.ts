import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;

  constructor(fb:FormBuilder,
    private authService: AuthService,
    private router:Router){
  
    this.formLogin =fb.group({
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

logarConta(){
  if(this.formLogin.valid){
    //recupera os valores dos input
    const usuario = this.formLogin.value
    //chama o metodo do authService
    this.authService.autenticarSenhaeEmail(usuario).subscribe(resposta=>{
      alert("Usuario Authenticado com Sucesso")
      this.router.navigate(["/home"])
    })
  }else{alert('Senha / E-mail incorreta')}
}

}
