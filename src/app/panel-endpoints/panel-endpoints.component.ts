import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-panel-endpoints',
  templateUrl: './panel-endpoints.component.html',
  styleUrls: ['./panel-endpoints.component.scss']
})
export class PanelEndpointsComponent implements OnInit {

  gruposEndpoints: string[] = [
    'Localizations',
    'Restaurants',
    'Products',
    'Users',
    'Auth',
    'Orders',
    'Categories',
  ];

  constructor(private myElement: ElementRef) { }

  ngOnInit() {
  }
  goTo(id: string) {
    const el = this.myElement.nativeElement.querySelector('#' + id);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
