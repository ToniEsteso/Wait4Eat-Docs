import { Injectable } from '@angular/core';
import { Endpoint } from '../models/endpoint.model';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  private apiRoot = 'https://wait4eat-9f639.web.app/api/v1';
  private tiposAcceso = {
    tipoC: 'Sin login',
    tipo0: 'Clientes',
    tipo1: 'Propietario de un restaurante',
    tipo2: 'Administrador',
  };

  private endpointsProducts: Endpoint[] = [
    {
      descripcion: 'Todos los productos',
      verbo: 'GET',
      url: '/products',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [

      ],
      response: ''
    }, {
      descripcion: 'Informacion de un producto',
      verbo: 'GET',
      url: '/products/:idProduct',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [
        { tipo: 'number', nombre: 'idProduct', template: '', valor: '' }
      ],
      response: ''
    }, {
      descripcion: 'Crear un producto',
      verbo: 'POST',
      url: '/products',
      tipoAcceso: this.tiposAcceso.tipo1,
      parametros: [
        { tipo: 'json', nombre: 'Producto', template: '', valor: '' }
      ],
      response: ''
    }, {
      descripcion: 'Actualizar un producto',
      verbo: 'PUT',
      url: '/products/:idProduct',
      tipoAcceso: this.tiposAcceso.tipo1,
      parametros: [
        { tipo: 'number', nombre: 'idRestaurant', template: '', valor: '' },
      ],
      response: ''
    }, {
      descripcion: 'Borrar un producto',
      verbo: 'DELETE',
      url: '/products/:idProduct',
      tipoAcceso: this.tiposAcceso.tipo1,
      parametros: [
        { tipo: 'number', nombre: 'idProduct', template: '', valor: '' }
      ],
      response: ''
    },
  ];
  private endpointsCategories: Endpoint[] = [
    {
      descripcion: 'Todas las categorias',
      verbo: 'GET',
      url: '/categories',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [

      ],
      response: ''
    }, {
      descripcion: 'Informacion de una categoria',
      verbo: 'GET',
      url: '/categories/:idCategory',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [
        { tipo: 'number', nombre: 'idCategory', template: '', valor: '' }
      ],
      response: ''
    }, {
      descripcion: 'Todos los productos de una categoria',
      verbo: 'GET',
      url: '/categories/:idCategory/products',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [
        { tipo: 'number', nombre: 'idCategory', template: '', valor: '' }
      ],
      response: ''
    }, {
      descripcion: 'Crea una categoria',
      verbo: 'POST',
      url: '/categories',
      tipoAcceso: this.tiposAcceso.tipo1,
      parametros: [
        { tipo: 'json', nombre: 'Category', template: '', valor: '' }
      ],
      response: ''
    }, {
      descripcion: 'Actualiza una categoria',
      verbo: 'PUT',
      url: '/categories/:idCategory',
      tipoAcceso: this.tiposAcceso.tipo1,
      parametros: [
        { tipo: 'number', nombre: 'idCategory', template: '', valor: '' },
        { tipo: 'json', nombre: 'Category', template: '', valor: '' }
      ],
      response: ''
    }, {
      descripcion: 'Borra una categoria',
      verbo: 'DELETE',
      url: '/categories/:idCategory',
      tipoAcceso: this.tiposAcceso.tipo1,
      parametros: [
        { tipo: 'number', nombre: 'idCategory', template: '', valor: '' }
      ],
      response: ''
    },
  ];
  private endpointsLocalizations: Endpoint[] = [
    {
      descripcion: 'Todas las localizaciones',
      verbo: 'GET',
      url: '/localizations',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [

      ],
      response: ''
    },
    {
      descripcion: 'Una localización por id',
      verbo: 'GET',
      url: '/localizations/:idLocalization',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [
        { tipo: 'number', nombre: 'idLocalization', template: '', valor: '' }
      ],
      response: ''
    },
    {
      descripcion: 'Todos los restaurantes en una localización',
      verbo: 'GET',
      url: '/localizations/:idLocalization/restaurants',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [
        { tipo: 'number', nombre: 'idLocalization', template: '', valor: '' }
      ],
      response: ''
    },
    {
      descripcion: 'Crear una localización',
      verbo: 'POST',
      url: '/localizations/:idLocalization',
      tipoAcceso: this.tiposAcceso.tipo2,
      parametros: [
        { tipo: 'number', nombre: 'idLocalization', template: '', valor: '' }
      ],
      response: ''
    }
  ];
  private endpointsOrders: Endpoint[] = [
    {
      descripcion: 'Todos los pedidos',
      verbo: 'GET',
      url: '/orders',
      tipoAcceso: this.tiposAcceso.tipo0,
      parametros: [

      ],
      response: ''
    }, {
      descripcion: 'Informacion de un pedido',
      verbo: 'GET',
      url: '/orders/:idOrder',
      tipoAcceso: this.tiposAcceso.tipo0,
      parametros: [
        { tipo: 'number', nombre: 'idOrder', template: '', valor: '' }
      ],
      response: ''
    }, {
      descripcion: 'Crea un pedido',
      verbo: 'POST',
      url: '/orders',
      tipoAcceso: this.tiposAcceso.tipo0,
      parametros: [
        { tipo: 'json', nombre: 'Order', template: '', valor: '' }
      ],
      response: ''
    }
  ];
  private endpointsRestaurants: Endpoint[] = [
    {
      descripcion: 'Todos los restaurantes',
      verbo: 'GET',
      url: '/restaurants',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [

      ],
      response: ''
    }, {
      descripcion: 'Restaurante por id',
      verbo: 'GET',
      url: '/restaurants/:idRestaurant',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [
        { tipo: 'number', nombre: 'idRestaurant', template: '', valor: '' }
      ],
      response: ''
    }, {
      descripcion: 'Localizacion de un restaurante',
      verbo: 'GET',
      url: '/restaurants/:idRestaurant/localization',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [
        { tipo: 'number', nombre: 'idRestaurant', template: '', valor: '' }
      ],
      response: ''
    }, {
      descripcion: 'Categorias de un restaurante',
      verbo: 'GET',
      url: '/restaurants/:idRestaurant/categories',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [
        { tipo: 'number', nombre: 'idRestaurant', template: '', valor: '' }
      ],
      response: ''
    }, {
      descripcion: 'Productos de un restaurante',
      verbo: 'GET',
      url: '/restaurants/:idRestaurant/products',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [
        { tipo: 'number', nombre: 'idRestaurant', template: '', valor: '' }
      ],
      response: ''
    }, {
      descripcion: 'Crear un restaurante',
      verbo: 'POST',
      url: '/restaurants',
      tipoAcceso: this.tiposAcceso.tipo2,
      parametros: [
        {
          tipo: 'json',
          nombre: 'Restaurant',
          template: '{\n\t"cif": "example cif",\n\t"id": "example id",\n\t"name": "example name"\n}',
          valor: ''
        }
      ],
      response: ''
    }, {
      descripcion: 'Actualizar un restaurante',
      verbo: 'PUT',
      url: '/restaurants/:idRestaurant',
      tipoAcceso: this.tiposAcceso.tipo2,
      parametros: [
        { tipo: 'number', nombre: 'idRestaurant', template: '', valor: '' },
        {
          tipo: 'json',
          nombre: 'Restaurant',
          template: '{\n\t"cif": "example cif",\n\t"id": "example id",\n\t"name": "example name"\n}',
          valor: ''
        }
      ],
      response: ''
    }, {
      descripcion: 'Borrar un restaurante',
      verbo: 'DELETE',
      url: '/restaurants/:idRestaurant',
      tipoAcceso: this.tiposAcceso.tipo2,
      parametros: [
        { tipo: 'number', nombre: 'idRestaurant', template: '', valor: '' }
      ],
      response: ''
    }
  ];
  private endpointsUsers: Endpoint[] = [
    {
      descripcion: 'Todos los usuarios',
      verbo: 'GET',
      url: '/users',
      tipoAcceso: this.tiposAcceso.tipo2,
      parametros: [

      ],
      response: ''
    },
    {
      descripcion: 'Informacion de un usuario',
      verbo: 'GET',
      url: '/users/:idUser',
      tipoAcceso: this.tiposAcceso.tipo2,
      parametros: [
        { tipo: 'number', nombre: 'idUser', template: '', valor: '' }
      ],
      response: ''
    },
    {
      descripcion: 'Todos los pedidos de un usuario',
      verbo: 'GET',
      url: '/users/:idUser/orders',
      tipoAcceso: this.tiposAcceso.tipo2,
      parametros: [
        { tipo: 'number', nombre: 'idUser', template: '', valor: '' }
      ],
      response: ''
    },
    {
      descripcion: 'Crear un usuario',
      verbo: 'POST',
      url: '/users',
      tipoAcceso: this.tiposAcceso.tipo2,
      parametros: [
        { tipo: 'json', nombre: 'User', template: '', valor: '' }
      ],
      response: ''
    },
  ];
  private endpointsAuth: Endpoint[] = [
    {
      descripcion: 'Crea una sesion',
      verbo: 'POST',
      url: '/auth/login',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [
        { tipo: 'json', nombre: 'LoginRequest', template: '{\n\t"username": "example username",\n\t"password": "example password"\n}', valor: '' }
      ],
      response: ''
    }, {
      descripcion: 'Devuelve toda la informacion del usuario logeado',
      verbo: 'GET',
      url: '/auth/me',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [

      ],
      response: ''
    }, {
      descripcion: 'Registra un usuario',
      verbo: 'POST',
      url: '/auth/register',
      tipoAcceso: this.tiposAcceso.tipoC,
      parametros: [
        { tipo: 'json', nombre: 'LoginRequest', template: '', valor: '' }
      ],
      response: ''
    },
  ];

  constructor() { }

  getEndpointsLocalizations(): Endpoint[] {
    return this.endpointsLocalizations;
  }

  getEndpointsRestaurants(): Endpoint[] {
    return this.endpointsRestaurants;
  }

  getEndpointsProducts(): Endpoint[] {
    return this.endpointsProducts;
  }

  getEndpointsUsers(): Endpoint[] {
    return this.endpointsUsers;
  }

  getEndpointsAuth(): Endpoint[] {
    return this.endpointsAuth;
  }

  getEndpointsOrders(): Endpoint[] {
    return this.endpointsOrders;
  }

  getEndpointsCategories(): Endpoint[] {
    return this.endpointsCategories;
  }

}
