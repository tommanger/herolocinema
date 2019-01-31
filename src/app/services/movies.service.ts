import { Injectable } from '@angular/core';
import { Observable, forkJoin, Subject } from 'rxjs';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private BASE_URL = 'https://www.omdbapi.com/?apikey=bdfb6376'
  private moviesNames = [
    'glass',
    'Aquaman',
    'Mission: Impossible – Fallout',
    'Replicas',
    'spider-man: into the spider-verse',
    'the upside',
    'Mandy',
    'Paddington 2',
    'Leave No Trace',
    'The Ballad of Buster Scruggs',
    'A Private War',
    'Annihilation'
  ];
  private movies: Movie[] = []
  private moviesUpdated = new Subject<{ movies: Movie[] }>()
  constructor(private http: HttpClient) { }
  getMovies() {
    return this.moviesUpdated.asObservable()
  }
  fetchMovies(): void {
    forkJoin(this.moviesNames.map(movieName => {
      return this.getMovie(movieName)
    }))
      .subscribe(movies => {
        this.movies = movies
        this.moviesUpdated.next({ movies: this.movies })
      })
  }
  getMovie(name): Observable<Movie> {
    return this.http.get(`${this.BASE_URL}&t=${name}`)
      .pipe(map((res: any) => {
        if(res.Response === "False") return null
        let { Title, Year, Runtime, Genre, Director, imdbID, Poster } = res;
        let movie = { Title, Year, Runtime, Genre, Director, imdbID, Poster }
        return movie as Movie
      }))
  }
  deleteMovie(movieId) {
    let idx = this.movies.findIndex(movie => movie.imdbID === movieId)
    this.movies.splice(idx, 1)
    this.moviesUpdated.next({ movies: this.movies })
  }
  updateMovie(movie) {
    let idx = this.movies.findIndex(currMovie => currMovie.imdbID === movie.imdbID)
    if(idx === -1){
      this.movies.unshift(movie)
    }else{
      this.movies.splice(idx, 1, movie)
    }
    this.moviesUpdated.next({ movies: this.movies })
  }
  movieExist(movieTitle){
    return this.movies.some(({Title})=> movieTitle.toLowerCase() === Title.toLowerCase())
  }
  makeid(l) {
    let text = "";
    let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < l; i++) {
      text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
  }
}
