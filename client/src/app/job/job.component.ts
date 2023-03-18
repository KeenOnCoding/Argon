import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

    id: any;
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
                console.log(params); // { order: "popular" }

                this.id = params['id'];

                console.log(this.id); // popular
            }
            );
    }

}
