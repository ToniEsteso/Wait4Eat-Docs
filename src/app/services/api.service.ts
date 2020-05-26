import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parametro } from '../models/parametro';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private static token = '';
  private apiRoot = 'https://wait4eat-9f639.web.app/api/v1';
  private httpHeaders: HttpHeaders;
  private options: any;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders()
      .set('Accept', '*/*')
      .set('Content-type', 'application/json')
      .set('access-token', ApiService.getToken());

    this.options = {
      headers: this.httpHeaders,
      responseType: 'json'
    };
  }


  static getToken() {
    return ApiService.token;
  }
  static setToken(token: string) {
    ApiService.token = token;
  }
  static isLoggedIn() {
    if (ApiService.token === '') {
      return false;
    } else {
      return true;
    }
  }
  llamarApi(verbo: string, url: string, parametros: Parametro[]): Observable<object> {
    let body: string;
    url = this.apiRoot + url;

    parametros.forEach(param => {
      url = url.replace(':' + param.nombre, param.valor);
      if (param.tipo === 'json') {
        try {
          body = JSON.parse(param.valor);
        } catch (error) {

        }
      }
    });
    let observable: Observable<object>;

    switch (verbo) {
      case 'GET':
        observable = this.http.get(url);
        break;
      case 'POST':
        observable = this.http.post(url, body, this.options);
        break;
      case 'PUT':
        observable = this.http.put(url, body, this.options);
        break;
      case 'DELETE':
        observable = this.http.delete(url);
        break;
      default:
        observable = null;
        break;
    }
    return observable;
  }
}
