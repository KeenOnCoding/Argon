import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-createresume',
    templateUrl: './createresume.component.html',
    styleUrls: ['./createresume.component.css']
})

export class CreateresumeComponent implements OnInit {

    fromDate: NgbDate;
    toDate: NgbDate;
    hoveredDate: NgbDate;
    closeResult: string;
    model1: NgbDate;
    model2: NgbDate;
    model: NgbDate;
    focus;
    focus1;
    focus2;
    focus3;
    focus4;

    page = 2;
    page1 = 3;
    active = 1;
    active1 = 1;
    active2 = 1;

    constructor(private modalService: NgbModal, calendar: NgbCalendar, private router: Router) {
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }

    ngOnInit() { }

    navigateResumes() {
        this.router.navigate(['/resumes/']);
    }
}
