import { Component, OnInit } from '@angular/core';
import {DataBreedsService} from "./data-breeds.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  searchNames = new Subject();
  names:any;

  constructor(private dataBreedsService:DataBreedsService) { }

  ngOnInit(): void {
    this.dataBreedsService.getAllBreedsNames()
      .subscribe(response =>{
        this.names = response;
        console.log(response)
      })
  }

}
