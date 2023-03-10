import { Component, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article:Article;
  constructor() { }

  voteUp():boolean{
    this.article.voteup();
    return false;
  }
  voteDown():boolean{
    this.article.votedown();
    return false;
  }

  ngOnInit(): void {
  }

}
