import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http:HttpClient) { }

  getSearchResults(childFriendly:number, intelligence:number){
    let search:string = "http://localhost:9092/api/search"
        +"?child_friendly="+childFriendly
        +"&intelligence="+intelligence;
    // let search:string = "https://cat-breed-chooser-backend.herokuapp.com/api/search"
    //   +"?childFriendly="+childFriendly
    //   +"&intelligence="+intelligence;
    console.log(search);
    return this.http.get(search);
  }
}
