import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'herolo-cinema';
  searchTxt = ''
  searchMovies(ev){
    this.searchTxt = ev
  }
}
