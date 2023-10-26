import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  name!: string;
  age!: number;
  ageCategory!: string;

  constructor() { }

  ngOnInit() {
  }
  async getAge() {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${this.name}`);
      const data = response.data;
      this.age = data.age;
      this.determineAgeCategory();
    } catch (error) {
      console.error(error);
    }
  }

  determineAgeCategory() {
    if (this.age < 18) {
      this.ageCategory = 'joven';
    } else if (this.age < 65) {
      this.ageCategory = 'adulto';
    } else {
      this.ageCategory = 'anciano';
    }
}
}
