import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'astro-view-app';
  faCheck = faCheck;
  date = new Date();
  
}
