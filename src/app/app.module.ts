import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';

import { HttpClientModule } from '@angular/common/http';
import { MoviePreviewComponent } from './cmps/movie-preview/movie-preview.component';
import { NavBarComponent } from './cmps/nav-bar/nav-bar.component';
import { PopupDeleteComponent } from './cmps/popup-delete/popup-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FilterPipe } from './services/filter.pipe';
import { MovieEditComponent } from './cmps/movie-edit/movie-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CleanTxtPipe } from './services/clean-txt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviePreviewComponent,
    NavBarComponent,
    PopupDeleteComponent,
    FilterPipe,
    MovieEditComponent,
    CleanTxtPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[PopupDeleteComponent,MovieEditComponent]
})
export class AppModule { }
