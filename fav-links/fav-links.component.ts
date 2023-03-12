import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  links = ["https://www.theonion.com/", "https://en.wikipedia.org/wiki/Lynx", "https://willrobotstakemyjob.com/"]
  constructor() { }

  ngOnInit() {
  }

}
