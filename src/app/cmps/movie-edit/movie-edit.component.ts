import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {
  myForm: FormGroup;

  constructor(public movieEditRef: MatDialogRef<MovieEditComponent>,
    private moviesService: MoviesService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.setForm()
  }
  onSaveMovie() {
    let movie = {
      imdbID: (this.data) ? this.data.imdbID: this.moviesService.makeid(8),
      ...this.myForm.value
    }
    this.moviesService.updateMovie(movie)
  }
  searchMovie(){
    this.moviesService.getMovie(this.myForm.value.Title)
    .subscribe(movie=> {
      if(movie){
        this.data = movie
        this.setForm()
      } 
    })
  }
  movieExist({value}){
    if(this.data) return
    let isDuplicate = this.moviesService.movieExist(value)
    let validationErrors : ValidationErrors
    if(isDuplicate) return validationErrors = { duplicate: true }
  }
  setForm(){
    this.myForm = this.fb.group({
      Title: [(this.data) ? this.data.Title.replace(/[^a-zA-Z0-9 ]/g, '') : '', [Validators.required,this.movieExist.bind(this)]],
      Year: [(this.data) ? this.data.Year : '', [Validators.required, Validators.min(1870), Validators.max(2019)]],
      Runtime: [(this.data) ? this.data.Runtime : '', [
        Validators.required,
      ]],
      Genre: [(this.data) ? this.data.Genre : '', [
        Validators.required,
      ]],
      Director: [(this.data) ? this.data.Director : '', [
        Validators.required,
      ]],
      Poster: [(this.data) ? this.data.Poster : '', [
        Validators.required,
      ]],
    })
  }
  errorMsg(Title){
    if(!Title.errors) return
    return (Title.errors.duplicate) ? `You can not use ${Title.value}, It already exists` : 'You must fill in the field Title!'
    
  }

}
