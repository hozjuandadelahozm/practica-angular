import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portafolio-app';
  public listVideos:Array<any> = []

  ngOnInit(): void {
    
    this.listVideos = [
      {
        title: 'Video 1',
        subtitle: 'Subtitle video 1',
        img: 'https://nfnatcane.es/blog/wp-content/uploads/2022/03/American-Pitbull-Terrier.jpg' 
      },
      {
        title: 'Video 2',
        subtitle: 'Subtitle video 2',
        img: 'https://nfnatcane.es/blog/wp-content/uploads/2022/03/American-Pitbull-Terrier.jpg'
      },
      {
        title: 'Video 3',
        subtitle: 'Subtitle video 3',
        img: 'https://nfnatcane.es/blog/wp-content/uploads/2022/03/American-Pitbull-Terrier.jpg'
      }
    ]

  }
}
