import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MovieEditComponent } from '../movie-edit/movie-edit.component'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  @Output() onSearchMovies = new EventEmitter();

  constructor(private dialog : MatDialog) { }
  menuOpen = true;
  ngOnInit() {
  }

  searchMovies(ev){
    let txt = ev.target.value
    this.onSearchMovies.emit(txt);
  }
  addMovie(){
    const movieEditRef = this.dialog.open(MovieEditComponent)
  }
  openMenu(){
    let menu = document.querySelector('.menu')
    menu.classList.toggle('open-menu')
    this.menuOpen = !this.menuOpen
  }
}
