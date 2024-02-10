import { Injectable } from '@angular/core';
import { Usuario } from './models/Usuario.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

mostrarMenu = new Subject<boolean>()

  constructor() { }

  login(usuario:string,senha:string): void{
    if(usuario == 'aluno' && senha == '1234'){
      localStorage.setItem('token', 'qwer1234');
      this.mostrarMenu.next(false)
      alert('Acesso permitido')
    }else{
      this.mostrarMenu.next(true)
      alert('Acesso negado')
    }
  }

setMostraMenu(valor:boolean){
this.mostrarMenu.next(valor)
}

getMostraMenu(){
return this.mostrarMenu.asObservable()
}

}
