import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCalendar, NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Resume, Workplace } from '../../models/resume';
import { LocalStoreManager } from '../../services/local-store-manager.service';


@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit
{
    page = 2;
    page1 = 3;
    active = 1;
    active1 = 1;
    active2 = 1;

    resumes: Resume[] = [];
    resume: Resume;
    workplace: Workplace;

    fromDate: NgbDate;
    toDate: NgbDate;

    id: any;

    isEditMode = false;
    isAddWorkplace = false;
    isEditeWorkPlace = false;
    isEditHeadWorkplace = false;

    constructor(private modalService: NgbModal, calendar: NgbCalendar, private router: Router, private route: ActivatedRoute, private localStr: LocalStoreManager) {
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }

    ngOnInit(): void
    {
        this.route.queryParams
            .subscribe(params => {
                if (params['id']) {
                    this.id = params['id'];
                }
            });
        let val = this.localStr.get('resumes');
        this.resumes = JSON.parse(val) as Resume[];
        this.resume = this.resumes.find(resume => resume.id == this.id);
        
    }
    edit() {
        this.isEditMode = true;
    }
    editCancel() {
        this.isEditMode = false;
    }
    backToEditMode() {
        this.isEditMode = true; this.isAddWorkplace = false;
    }
    addWorkplace() {
        this.isAddWorkplace = true;
        this.workplace = new Workplace();
        this.workplace.id = this.getRandomInt(1000);
    }
    editWorkPlace() {

    }
    editHeadWorkplace(){

    }
    saveAddWorkplace() {

        this.resume.workplaces.push(this.workplace);
        this.isEditMode = false;
        this.isAddWorkplace = false;

        this.localStr.delete("resumes");
        this.localStr.create("resumes", this.resumes);

        this.router.navigate(['/resumes/']);

        return;
    }
    saveAfterEdit() {

        this.localStr.delete("resumes");
        this.localStr.create("resumes", this.resumes);
        this.router.navigate(['/resumes']);

        return;
    }
    save() {
        this.resume.id = this.resumes.length + 1;
        this.resumes.push(this.resume);

        this.localStr.delete("resumes");
        this.localStr.create("resumes", this.resumes);
        this.router.navigate(['/resumes']);

        return;
    }
    private getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}
