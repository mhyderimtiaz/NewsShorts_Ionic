import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { IonSearchbar } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data:any;
  constructor(private newsService:NewsService, private router : Router){ }

  ngOnInit() {
  
  
    this.newsService
    .getData('top-headlines?country=us&category=business')
    .subscribe(data =>{
      console.log(data);
      this.data=data;
    })
  }
  onGoToNewsSinglePage(article){
    this.newsService.currentArtcile = article;
    this.router.navigate(['/news-single']); 

  }
}
