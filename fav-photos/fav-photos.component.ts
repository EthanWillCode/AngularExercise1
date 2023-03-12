import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://i.chzbgr.com/thumb800/16763397/h0B023285/funny-memes-programming-memes-developers-coding-memes-coder-coding-nerdy-memes-memes-java-memes';
  image2 = 'https://vincentdnl.com/static/d39b503cebf83760d389b29b8c66d03b/6a068/semicolon2.jpg';
  image3 = 'https://images.squarespace-cdn.com/content/v1/5446acd5e4b00ffbdbb7c3eb/1573752599308-FXIT074J0RZZLG9LZU9R/allyoucan.jpg'
  constructor() { }

  ngOnInit() {
  }

}