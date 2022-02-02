import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BrowseComponent} from "./browse/browse.component";
import {BreedInfoComponent} from "./breed-info/breed-info.component";
import {SearchResultComponent} from "./search-result/search-result.component";

const routes: Routes = [
  {path: "",component:HomeComponent},
  {path:"browse", component:BrowseComponent},
  {path:"id/:id", component:BreedInfoComponent},
  {path: "search/:query", component:SearchResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
