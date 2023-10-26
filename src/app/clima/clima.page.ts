import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  apiKey = 'bafa70dcb9945fda6b5c4a20613c8e2f'; // Reemplaza con tu API key de OpenWeatherMap
  weatherData: any;

  constructor() {}

  ngOnInit() {
    this.getWeatherData();
  }

  async getWeatherData() {
    const city = 'Santo Domingo,DO'; // Ciudad y código de país para la República Dominicana
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;

    try {
      const response = await axios.get(apiUrl);
      this.weatherData = response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
