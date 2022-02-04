import {Component, OnInit} from '@angular/core';
import {SearchServiceService} from "./search-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  result: any;

  constructor(private searchService: SearchServiceService, private route: ActivatedRoute) {
  }

  findResults(param: any) {
    this.searchService.getSearchResults(param)
      .subscribe(response => {
        this.result = response;
        console.log(response);
      })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.findResults(params.get("query"));
      console.log(params);
    })
  }


}
