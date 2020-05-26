import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Parametro } from '../models/parametro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  protected loginRequest: any = {
    username: '',
    password: ''
  };
  protected isLoggedIn = false;
  private tiposAcceso = {
    0: 'Clientes',
    1: 'Propietario de un restaurante',
    2: 'Administrador',
  };
  protected mensajeLogeado: string;


  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  logIn() {
    const parametros: Parametro[] = [new Parametro('json', 'LoginRequest', JSON.stringify(this.loginRequest), '')];
    this.apiService.llamarApi('POST', '/auth/login', parametros)
      .subscribe((apiData: any) => {
        ApiService.setToken(apiData.token);
        this.isLoggedIn = ApiService.isLoggedIn();
        this.mensajeLogeado = 'Estas logeado como ' + this.tiposAcceso[apiData.user.type];
      });
  }


}
