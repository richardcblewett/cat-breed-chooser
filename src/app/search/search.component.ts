import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SearchServiceService} from "../search-result/search-service.service";
import {FormClass} from "./formClass"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})


export class SearchComponent implements OnInit {

  count: number = 0;
  submitted: boolean = false;
  result: any;

  //sets the default values for the range forms
  childFriendly = new FormClass("childFriendly","Child Friendly", 1,1,5 );
  grooming = new FormClass("grooming", "Cleanliness", -5,-5,-1);
  energyLevel = new FormClass("energyLevel", "Energy Level", 1, 1, 5);
  intelligence = new FormClass("intelligence", "Intelligence", 1,1,5);
  sheddingLevel = new FormClass("sheddingLevel", "Shedding Level", -5, -5,-1);
  socialNeeds = new FormClass("socialNeeds", "Sociability", 1, 1, 5);
  vocalisation = new FormClass("vocalisation","Vocalisation", 1, 1, 5);
  //builds the form options
  model = [this.childFriendly, this.grooming, this.energyLevel, this.intelligence, this.sheddingLevel, this.socialNeeds, this.vocalisation];

  constructor(private http: HttpClient, private searchService: SearchServiceService) {
  }

  buildQuery(input: FormClass[]):string {
    //everything after the "?" on the routerlink.
    let query = "";
    for (let i = 0; i < input.length; i++){
      query = `${query}${input[i].name}=${Math.abs(input[i].value)}`
      if (i < input.length-1) { query += "&";}
    }
    return query;
  }

  resetSubmit() {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit(): void {
  }


}
