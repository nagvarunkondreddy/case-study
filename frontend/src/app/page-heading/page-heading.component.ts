import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../shared/store/reducers/current-router.reducer';
import * as currentRouteSelector from '../shared/store/selector/current-router.selectors';
import { Router } from '@angular/router';
import { ArticleService } from '../shared/services/article/article.service';

@Component({
  selector: 'app-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.css'],
})
export class HeadingComponent implements OnInit {
  @Input() heading1: any;
  @Input() addButtonText: any;
  @Input() addButtonDisplay: boolean = false;
  @Input() modalType: any;
  @Input() mobileViewButtonText: any;
  activeRoute: any;
  constructor(private store: Store<State>, private router: Router, private articleService : ArticleService) {
    this.store
      .pipe(select(currentRouteSelector.getCurrentRoute))
      .subscribe((element) => {
        this.activeRoute = element.name;
      });
  }

  ngOnInit(): void {}

  buttonClick() {
    if (this.activeRoute === 'article/stats') {
      this.router.navigateByUrl('/texteditor');
    }
    if(this.activeRoute === 'texteditor')
    {
     const editor = document.getElementById('editor');
     const editorValue = (<HTMLIFrameElement>editor).contentWindow?.document.body.innerText;
     this.articleService.addArticle(editorValue);
     this.router.navigateByUrl('/article/all-articles');
     
    }
  }

  getClassName() {
    if (this.activeRoute === 'texteditor') {
      return 'col-lg-2 offset-lg-4 shiftButton';
    } else {
      return 'col-lg-4 offset-lg-4';
    }
  }

  getIcons() {
    if (this.activeRoute === 'texteditor') {
      return 'bi bi-cloud-upload-fill';
    } else {
      return 'bi bi-plus';
    }
  }
  getClassName1() {
    if (this.activeRoute === 'texteditor') {
      return 'col-6';
    } else {
      return 'col-8';
    }
  }

  getClassName2() {
    if (this.activeRoute === 'texteditor') {
      return 'col-3';
    } else {
      return 'col-4';
    }
  }
}
