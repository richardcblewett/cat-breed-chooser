import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor(private http:HttpClient) { }

  getAllPictures(){
    let allPictures:any = "http://localhost:9092/api/pictures";
    //let allPictures:any = "https://https://cat-breed-chooser-backend.herokuapp.com/api/pictures";
    return this.http.get(allPictures);
  }

  getSinglePicture(reference:string){
    let singlePicture:any = `https://cdn2.thecatapi.com/images/${reference}.jpg`;
    return this.http.get(singlePicture);
  }

}
