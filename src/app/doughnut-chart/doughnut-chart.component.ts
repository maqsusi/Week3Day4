import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})

export class DoughnutChartComponent {

  doughnutChartLabels: Label[] = ["Akshat's Love for Badminton", "Akshat's Love for Footall", "Akshat's Love for Singing"];
  doughnutChartData: MultiDataSet = [
    [35, 45, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

}