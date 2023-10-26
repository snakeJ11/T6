import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/herramienta', icon: 'home' },
    { title: 'Predecir su genero', url: '/genero', icon: 'people-circle' },
    { title: 'Determina la edad ', url: '/edad', icon: 'people' },
    { title: 'Muestra las universidades', url: '/universidades', icon: 'business' },
    { title: 'Clima en RD', url: '/clima', icon: 'cloudy' },
    { title: 'WordPress', url: '/wordpress', icon: 'newspaper' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'information' },
  ]; 

}
