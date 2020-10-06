import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "gdx-chart-node",
  templateUrl: "./chart-node.component.html",
  styleUrls: ["./chart-node.component.scss"]
})
export class ChartNodeComponent implements OnInit {
  @Input() isMobile;

  employee;
  children: any[] = [];
  showChild = true;

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.getEmployeeData();
  }

  addChild() {
    this.children.push({
      name: "new employee"
    });
    this.showChild = true;
  }

  removeChild() {
    this.children.pop();
  }

  toggleChild() {
    this.showChild = !this.showChild;
  }

  // #next: onScroll children => child of children hide & show accordingly

  // just for dummy data
  getEmployeeData() {
    this.http.get<any>("https://randomuser.me/api/").subscribe(
      data => {
        this.employee = data.results[0];
        console.log(this.employee);
      },
      error => console.error("There was an error!", error)
    );
  }
}
