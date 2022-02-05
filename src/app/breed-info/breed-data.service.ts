import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BreedDataService {

  constructor(private http: HttpClient) {
  }

  getBreedById(id: string) {
    let breed:string = "http://localhost:9092/api/id?id="+id;
    //let breed: string = "https://cat-breed-chooser-backend.herokuapp.com/api/id?id=" + id;
    return this.http.get(breed);
  }
}
