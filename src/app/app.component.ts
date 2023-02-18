import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'angular-reddit';
  articles: Article[];
  constructor()
  {
    this.articles=[
      new Article("Angular2","http://angular.com/test1",0),
      new Article("Fullstack","http://fullstack.com/test2",0),
      new Article("AngularHomePage","http://angular.com/test3",0),
    ];
  }
  addArticle(title:HTMLInputElement,link:HTMLInputElement){
    this.articles.push(new Article(title.value,link.value,0));
    return false;
  }
  sortedArticles():Article[]{
    return this.articles.sort((a:Article,b:Article)=>b.votes-a.votes);
  }
}
