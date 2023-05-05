import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resume } from '../../models/resume';
import { LocalStoreManager } from '../../services/local-store-manager.service';

@Component({
    selector: 'app-resumes',
    templateUrl: './resumes.component.html',
    styleUrls: ['./resumes.component.css']
})
export class ResumesComponent implements OnInit {

    resumes: Resume[] = [];
    isEmpty: boolean = true;

    constructor(private router: Router, private localStr: LocalStoreManager) { }

    ngOnInit(): void {
        let val = this.localStr.get('resumes');
        this.resumes = JSON.parse(val) as Resume[];
        if (this.resumes != null) {
            this.isEmpty = false;
        }

        console.log(val);
    }

    navigateCreateResume() {
        this.router.navigate(['/resume/create']);
    }
}
