import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Resume } from '../../models/resume';
import { DataStorageService } from '../../services/data-storage.service';
import { LocalStoreManager } from '../../services/local-store-manager.service';


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

    resumes: Resume[] = [];
    resume: Resume;
    id: any;

    constructor(private router: Router, private route: ActivatedRoute, private localStr: LocalStoreManager) { }

    ngOnInit(): void {
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
}
