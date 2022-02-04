import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BreedDataService} from "./breed-data.service";
import {PicturesService} from "../home/slideshow/pictures.service";

@Component({
  selector: 'app-breed-info',
  templateUrl: './breed-info.component.html',
  styleUrls: ['./breed-info.component.css']
})
export class BreedInfoComponent implements OnInit {

  breed: any;
  paramId: string = '';
  loaded: boolean = false;

  constructor(private route: ActivatedRoute, private breedDataService: BreedDataService, private picturesService: PicturesService) {
  }

  findBreed(param: any) {
    this.breedDataService.getBreedById(param)
      .subscribe(response => {
        this.breed = response;
        this.loaded = true;
      })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.findBreed(params.get("id"));
    });
  }

  private setParamId() {

  }
}
