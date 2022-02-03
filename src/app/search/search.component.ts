import {Component, OnInit} from '@angular/core';
import {Search} from './search';
import {HttpClient} from "@angular/common/http";
import {SearchServiceService} from "../search-result/search-service.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})


export class SearchComponent implements OnInit {

  result: any;
  model = new Search(0, 0);
  count: number = 0;
  submitted:boolean = false;


  resetSubmit() {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted= true;
  };

  constructor(private http: HttpClient, private searchService: SearchServiceService) {
  }

  ngOnInit(): void {
  }

}
