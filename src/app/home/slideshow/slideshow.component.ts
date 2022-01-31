import { Component, OnInit } from '@angular/core';
import {PicturesService} from "./pictures.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  getAllPictures(){
    let allPictures:any = "http://localhost:9092/api/pictures";
    //let allPictures:any = "https://https://cat-breed-chooser-backend.herokuapp.com/api/pictures";
    return this.http.get(allPictures);
  }

  images = this.getAllPictures();

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
