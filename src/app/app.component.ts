import { Component } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  products = [];
  allProducts = [];
  query = "";
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.sendGetRequest(this.query).subscribe((data: any[]) => {
      this.products = data.drinks;
      this.allProducts = data.drinks;
    });
  }
  onNameChange(e) {
    console.log(e);
    this.products = this.allProducts.filter((i) => {
      return (
        i.strDrink.toLowerCase().indexOf(e.toString().toLowerCase()) !== -1 ||
        i.strCategory.toLowerCase().indexOf(e.toString().toLowerCase()) !== -1
      );
    });
  }
}
