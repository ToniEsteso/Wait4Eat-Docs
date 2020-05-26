import { Parametro } from './parametro';

export class Endpoint {
  url: string;
  verbo: string;
  descripcion: string;
  parametros: Parametro[];
  response: string;
  tipoAcceso: string;
}
