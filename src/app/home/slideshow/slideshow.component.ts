import {Component, OnInit} from '@angular/core';
import {PicturesService} from './pictures.service';
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  searchPictures = new Subject();
  imageInput: any;
  imageArray = [];
  image = "jeff";

  constructor(private picturesService: PicturesService) {
  }
  ngOnInit(): void {
    this.picturesService.getAllPictures()
          .subscribe(response => {
            this.imageInput = response;
            console.log(this.imageInput[0])
          })
      }
}
