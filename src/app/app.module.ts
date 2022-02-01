import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SlideshowComponent } from './home/slideshow/slideshow.component';
import { TextblockComponent } from './home/textblock/textblock.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import { BrowseComponent } from './browse/browse.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreedInfoComponent } from './breed-info/breed-info.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SlideshowComponent,
    TextblockComponent,
    BrowseComponent,
    NavigationComponent,
    BreedInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
