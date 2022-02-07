import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) {
  }

  getSearchResults(query: string) {
    //let search:string = "http://localhost:9092/api/search"+query;
    // console.log(search);
    let search: string = "https://cat-breed-chooser-backend.herokuapp.com/api/search" + query;
    return this.http.get(search);
  }

}
