import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Encanto', 'Soul', 'The Greatest Showman', 'Atlantis, the Lost Empire'];

   constructor() { }

   ngOnInit() {
   }

}
