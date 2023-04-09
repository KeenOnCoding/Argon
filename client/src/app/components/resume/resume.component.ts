import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
    page = 2;
    page1 = 3;
    active = 1;
    active1 = 1;
    active2 = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
