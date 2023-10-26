import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  name!: string;
  gender!: string;

  async getGender() {
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${this.name}`);
      const data = response.data;
      this.gender = data.gender;
    } catch (error) {
      console.error(error);
    }

}
}


