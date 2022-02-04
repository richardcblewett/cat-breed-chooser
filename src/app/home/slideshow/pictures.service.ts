import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor(private http:HttpClient) { }

  getAllPictures(){
    //let allPictures:string = "http://localhost:9092/api/pictures";
    let allPictures:string = "https://cat-breed-chooser-backend.herokuapp.com/api/pictures";
    return this.http.get(allPictures);
  }

  getSinglePicture(reference:string){
    let singlePicture:string = `https://cdn2.thecatapi.com/images/${reference}.jpg`;
    return singlePicture;
  }

}
