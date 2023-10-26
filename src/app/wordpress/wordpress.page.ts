import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
})
export class WordpressPage implements OnInit {

  apiUrl = 'https://blackamericaweb.com/wp-json/wp/v2';
  siteLogo!: string | null;
  newsData!: any[];

  constructor() { }

  ngOnInit() {
    // Obtener el logo del sitio
    axios.get(`${this.apiUrl}/settings`)
      .then(response => {
        this.siteLogo = response.data.media_detail;
        console.log(this.siteLogo)
      })
      .catch(error => {
        console.error('Error al obtener el logo del sitio:', error);
      });
      
    // Obtener las últimas 3 noticias
    axios.get(`${this.apiUrl}/posts?per_page=3`)
      .then(response => {
        this.newsData = response.data;
       
      })
      .catch(error => {
        console.error('Error al obtener las noticias:', error);
      });
  }
}




