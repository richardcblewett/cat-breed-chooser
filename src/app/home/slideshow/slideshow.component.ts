import { Component, OnInit } from '@angular/core';
import { PicturesService } from './pictures.service';
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  searchPictures = new Subject();
  imageInput:any;
  imageArray = [];
  image = "jeff";

  constructor(private picturesService:PicturesService) { }

  ngOnInit(): void {
    this.imageInput = this.picturesService.getAllPictures();
    // this.imageInput.forEach( (e:any) => {
    //    console.log(e.toString())
    // })
  }
  // ngOnInit(): void {
  //   this.searchPictures //
  //     .pipe(debounceTime(1000),distinctUntilChanged())
  //     .subscribe( () => {
  //       this.picturesService.getAllPictures()
  //         .subscribe( response => {
  //           this.images = response;
  //           console.log(this.images[0])
  //         })
  //     })
  // }
}
