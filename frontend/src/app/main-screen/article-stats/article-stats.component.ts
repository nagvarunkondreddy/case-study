import { Component, OnInit } from '@angular/core';
import { ArcElement, BarController, BarElement, BubbleController, CategoryScale, Chart, DoughnutController, Filler, Legend, LinearScale, LineController, LineElement, LogarithmicScale, PieController, PointElement, PolarAreaController, RadarController, RadialLinearScale, ScatterController, TimeScale, TimeSeriesScale, Title, Tooltip } from 'chart.js';

@Component({
  selector: 'app-article-stats',
  templateUrl: './article-stats.component.html',
  styleUrls: ['./article-stats.component.css']
})
export class ArticleStatsComponent implements OnInit {

  constructor() { Chart.register(ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Filler,
    Legend,
    Title,
    Tooltip); }

  ngOnInit(): void {
    new Chart("readsChart", {
      type: 'bar',
      data: {
        labels: ['Article 1', 'Article 2', 'Article 3', 'Article 4', 'Article 5', 'Article 6', 'Article 7', 'Article 8', 'Article 9', 'Article 10'],
        datasets: [{
          label: 'No. of Reads',
          data: [372, 194, 742, 848, 272, 973, 384, 640, 521, 496, 349, 576],
          backgroundColor: 'orange',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    new Chart("domainsChart", {
      type: 'doughnut',
      data: {
        labels: ['Web', 'App', 'Hardware', 'AI/ML'],
        datasets: [{
          label: 'No. of Articles',
          data: [5, 8, 3, 6],
          backgroundColor: ['#4E90FF', '#FF5151', '#E7FF49', '#6BD46A'],
          borderWidth: 1,
          borderColor: ['#4E90FF', '#FF5151', '#E7FF49', '#6BD46A'],
          hoverOffset: 4
        }],
      },
      options: {
        cutout: '70%',
        plugins: {
          legend: {
            position: 'right',
            labels: {
              padding: 20
            }
          }
        }
      }
    });
  }

}
