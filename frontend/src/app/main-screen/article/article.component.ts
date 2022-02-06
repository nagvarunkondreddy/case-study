import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Chart,
  ArcElement,
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
  Tooltip } from 'node_modules/chart.js';
import { ArticleService } from 'src/app/shared/services/article/article.service';
import { SpinnerService } from 'src/app/shared/services/spinner/spinner.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleData:any;
  showLoading:boolean =false; 
  constructor(private articleService : ArticleService,private spinnerService: SpinnerService,private cdRef:ChangeDetectorRef) {    

  }

  ngOnInit(): void {
    this.init();
    this.getArticle();
  }

  init(){
    this.spinnerService.getSpinnerObserver().subscribe((status)=>{
      console.log(status)
      this.showLoading = status;
      this.cdRef.detectChanges();
    })
  }

  getArticle(){
    this.spinnerService.requestStarted();
    this.articleService.getArticles();
    this.articleService.getArticlesContentObserver().subscribe(data =>{
      this.articleData=data;
     
     if(this.articleData.length>1)
     {
       console.log('data received')
       this.spinnerService.requestEnded();
      }
      
    });
  }

  deleteArticle(index:any){
    this.spinnerService.requestStarted();
    const obj = {_id:index};
    this.articleService.deleteArticle(obj);

  }

}
