import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ViewsModule } from './views/views.module';

import { AppComponent } from './app.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { HomeComponent } from './views/home/home.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CardMovieComponent,
    HomeComponent,
    MovieDetailComponent,
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ViewsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
