import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-barra-de-navegacao',
  templateUrl: './barra-de-navegacao.component.html',
  styleUrls: ['./barra-de-navegacao.component.css']
})
export class BarraDeNavegacaoComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router){}

  /* Para criar a função e necessario o AuthService */
  sairDoSistema(){
    this.authService.sairDoSistema().subscribe(resposta=>{
      alert('Até Logo')
      this.router.navigate(['/login'])
    })
  }

  ngOnInit(): void {}

  

}
