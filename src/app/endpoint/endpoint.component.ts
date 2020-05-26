import { Component, OnInit, Input } from '@angular/core';
import { Endpoint } from '../models/endpoint.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndpointComponent implements OnInit {
  @Input() endpoint: Endpoint;
  private httpHeaders: HttpHeaders;
  private options: any;
  protected respuesta: string;
  protected error: string;

  constructor(private apiService: ApiService) {
    this.httpHeaders = new HttpHeaders()
      .set('Accept', '*/*');

    this.options = {
      headers: this.httpHeaders,
      responseType: 'text'
    };
  }

  ngOnInit() {

  }
  aplicarTemplate() {
    this.endpoint.parametros.forEach(param => {
      console.log(param);

      if (param.tipo === 'json') {
        param.valor = param.template;
      }
    });
  }

  llamarFuncion() {
    this.apiService
      .llamarApi(this.endpoint.verbo,
        this.endpoint.url,
        this.endpoint.parametros)
      .subscribe(
        respuesta => {
          this.respuesta = JSON.stringify(respuesta, null, 4);
        },
        error => {
          this.error = JSON.stringify(error, null, 4);
          console.log('error');
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops... Algo no ha funcionado',
            text: 'Seguramente no tengas permisos.\n¡Haz login y vuelve a intentarlo!'
          });
        });
  }
}
