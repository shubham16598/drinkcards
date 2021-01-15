import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private REST_API_SERVER =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  constructor(private httpClient: HttpClient) {}
  public sendGetRequest(query) {
    this.REST_API_SERVER = this.REST_API_SERVER + query;
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
