import { Component, OnInit, Input } from '@angular/core';
import { Endpoint } from '../models/endpoint.model';
import { EndpointsService } from '../services/endpoints.service';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-grupo-endpoints',
  templateUrl: './grupo-endpoints.component.html',
  styleUrls: ['./grupo-endpoints.component.scss']
})
export class GrupoEndpointsComponent implements OnInit {

  @Input() tipo: string;
  endpoints: Endpoint[];

  constructor(private endpointsService: EndpointsService) {

  }
  ngOnInit() {
    switch (this.tipo) {
      case 'Localizations':
        this.endpoints = this.endpointsService.getEndpointsLocalizations();
        break;
      case 'Restaurants':
        this.endpoints = this.endpointsService.getEndpointsRestaurants();
        break;
      case 'Products':
        this.endpoints = this.endpointsService.getEndpointsProducts();
        break;
      case 'Users':
        this.endpoints = this.endpointsService.getEndpointsUsers();
        break;
      case 'Auth':
        this.endpoints = this.endpointsService.getEndpointsAuth();
        break;
      case 'Orders':
        this.endpoints = this.endpointsService.getEndpointsOrders();
        break;
      case 'Categories':
        this.endpoints = this.endpointsService.getEndpointsCategories();
        break;
      default:
        console.log('no coincide con ninguna');
        break;
    }
  }

}
