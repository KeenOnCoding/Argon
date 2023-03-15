import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seatch',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    focus;
    focus1;
    focus5;
    page = 2;
    page1 = 3;
    active = 1;
    active1 = 1;
    active2 = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
