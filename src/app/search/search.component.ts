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
  groomingEffort = new FormClass("grooming", "Grooming Effort", -5,-5,-1);
  intelligence = new FormClass("intelligence", "Intelligence", 1,1,5);
  //builds the form options
  model = [this.childFriendly, this.groomingEffort,this.intelligence];

  constructor(private http: HttpClient, private searchService: SearchServiceService) {
  }

  buildQuery(input: FormClass[]):string {
    //everything after the "?" on the routerlink.
    let query = "";
    for (let i = 0; i < input.length; i++){
      query = `${query}${input[i].name}=${Math.abs(input[i].value)}`
      if (i < input.length) { query += "&";}
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
