import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
})
export class UniversidadesPage implements OnInit {

  countryName!: string;
  universities!: any[]; // Array para almacenar las universidades

  constructor() {}

  async getUniversities() {
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?country=${this.countryName}`);
      this.universities = response.data;
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {
  }

}
