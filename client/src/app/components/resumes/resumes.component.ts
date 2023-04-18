import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.css']
})
export class ResumesComponent implements OnInit {

    constructor(private router: Router) { }

  ngOnInit(): void {
  }
    navigateCreateResume() {
        this.router.navigate(['/resume/create']);
        console.log('HELLO');
}
}
