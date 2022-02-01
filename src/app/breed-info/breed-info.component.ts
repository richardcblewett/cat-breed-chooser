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

  private setParamId() {
    this.route.paramMap.subscribe(params => {
      this.paramId = params.get("id") || '';
    });
  }

  constructor(private route: ActivatedRoute, private breedDataService: BreedDataService, private picturesService:PicturesService) {
  }

  ngOnInit(): void {
    this.setParamId();
    this.loaded = false;
    this.breedDataService.getBreedById(this.paramId)
      .subscribe(response => {
        this.breed = response;
        this.loaded = true;
      })
  }
}
