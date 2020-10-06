import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gdx-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.scss']
})
export class OrgChartComponent implements OnInit {

  isMobile = false;
  // #next: shrink mode (only avatar / name)

  constructor() { }

  ngOnInit() {
  }

  toggleMode() {
    this.isMobile = !this.isMobile;
  }

}