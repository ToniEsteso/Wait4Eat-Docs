export class Parametro {
  tipo: string;
  nombre: string;
  valor: string;
  template: string;
  constructor(tipo: string, nombre: string, valor: string, template: string) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.valor = valor;
    this.template = template;
  }
}
