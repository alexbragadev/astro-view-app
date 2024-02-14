import { Component } from '@angular/core';
import { headerNews } from 'src/app/shared/mocks/titulo-texto.mock';

@Component({
  selector: 'app-news',
  template: `
    <div class="container">
      <div class="row">
        <app-template-title-text>
            <p title>{{tituloNews}}</p>
            <p texto>{{textoNews}}</p>
        </app-template-title-text>
      </div>
    </div>
    `,
  styleUrls: ['./news.component.sass']
})
export class NewsComponent {
  tituloNews = headerNews.titulo;
  textoNews = headerNews.texto;
}
