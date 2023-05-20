import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Resume, Workplace } from '../../models/resume';
import { LocalStoreManager } from '../../services/local-store-manager.service';

@Component({
    selector: 'app-createresume',
    templateUrl: './createresume.component.html',
    styleUrls: ['./createresume.component.css']
})

export class CreateresumeComponent implements OnInit {

    resume: Resume = new Resume();
    resumes: Resume[];
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

    constructor(private modalService: NgbModal, calendar: NgbCalendar,
        private router: Router,
        private localStr: LocalStoreManager) {
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }

    ngOnInit() {
        this.resume.workplaces = new Array as Workplace[];
        let firstWorkplace = new Workplace();

        firstWorkplace.id = this.getRandomInt(1000).toString();
        this.resume.workplaces.push(firstWorkplace);

        let val = this.localStr.get('resumes');
        this.resumes = JSON.parse(val) as Resume[];
    }

    createResume() {
        if (this.resumes == null) {
            this.resumes = new Array as Resume[];
            this.resume.id = 1;
            this.resumes.push(this.resume);
            this.localStr.create("resumes", this.resumes);
            this.router.navigate(['/resumes/']);
            return;
        }

            this.resume.id = this.resumes.length + 1;
            this.resumes.push(this.resume);
            this.localStr.create("resumes", this.resumes);
            this.router.navigate(['/resumes/']);
    }

    private getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}
