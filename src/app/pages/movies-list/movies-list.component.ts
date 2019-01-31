import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../services/movie';
import { MatDialog } from '@angular/material';
import { PopupDeleteComponent } from '../../cmps/popup-delete/popup-delete.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[]
  private moviesSub: Subscription
  
  @Input() searchTxt: string

  constructor(private moviesService: MoviesService, private dialog : MatDialog) { }

  ngOnInit() {
    this.moviesService.fetchMovies()
    this.moviesSub = this.moviesService.getMovies()
    .subscribe((data: {movies: Movie[]}) => {
          this.movies = data.movies
        })
  }
  onDeleteMovie(id){
    const dialogRef = this.dialog.open(PopupDeleteComponent)
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.moviesService.deleteMovie(id)
      }
    });
  }
  openDetails(ev) {
    let card = document.getElementById(ev.target.id)
    card.children[0].classList.add('openDetails')
  }
    
}
