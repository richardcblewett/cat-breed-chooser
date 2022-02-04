import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataBreedsService {

  constructor(private http:HttpClient) { }

  getAllBreedsNames() {
    //let allNames:string = "http://localhost:9092/api/names";
    let allNames:string = "https://cat-breed-chooser-backend.herokuapp.com/api/names";
    return this.http.get(allNames);
  }

}
