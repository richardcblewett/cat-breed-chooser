import {Component, OnInit} from '@angular/core';
import {PicturesService} from './pictures.service';
import {Subject} from "rxjs";


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  searchPictures = new Subject();
  images: any;

  constructor(private picturesService: PicturesService) {
  }

  ngOnInit(): void {
    this.picturesService.getAllPictures()
      .subscribe(response => {
        this.images = response;
      })
  }
}
