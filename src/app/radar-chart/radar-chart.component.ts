import { Component } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})

export class RadarChartComponent {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Pace', 'Ball Control', 'Dribbling',
    'Vision and Passing', 'Mentality', 'Defending', 'Shooting', 'Physical'];

  public radarChartData: ChartDataSets[] = [
    { data: [5, 4, 4.5, 4, 4.5, 1.5, 4, 4], label: 'Marcus Rashford Skill Analysis' }
  ];
  public radarChartType: ChartType = 'radar';

}