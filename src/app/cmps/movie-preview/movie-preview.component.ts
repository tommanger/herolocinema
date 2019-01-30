import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../services/movie'
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MovieEditComponent } from '../movie-edit/movie-edit.component'

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss']
})
export class MoviePreviewComponent implements OnInit {

  @Input() movie: Movie
  @Output() deleteMovie = new EventEmitter();

  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }
 
  closeDetails(imdbId){
    let card = document.getElementById(imdbId)
    card.children[0].classList.remove('openDetails')
  }
  onDeleteMovie(imdbID){
    this.deleteMovie.emit(imdbID);
  }
  editMovie(){
    const movieEditRef = this.dialog.open(MovieEditComponent,{
      data: this.movie
    })
  }
}
