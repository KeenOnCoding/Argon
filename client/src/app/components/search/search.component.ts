import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from "@angular/router";
import { Vacancy } from '../../models/vacancy';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
    selector: 'app-seatch',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit, OnDestroy {
    focus;

    searchText: string;
    vacantions: Array<Vacancy>;
    result: Array<Vacancy>;

    private destroy$ = new Subject();

    constructor(private router: Router, private data: DataStorageService) { }

    ngOnDestroy() {
        this.destroy$.next(null);
        this.destroy$.unsubscribe();
    }

    ngOnInit() {
        this.vacantions = this.data.vacantions;
    }
    goJob(id: any) {
        this.router.navigate(['/job'], { queryParams: { id: id } });
    }
    onSubmit() {
        this.result = this.vacantions.filter((vacantion) => {
            console.log(vacantion['title'].toLowerCase().includes(this.searchText));
            return vacantion.title.toLowerCase().includes(this.searchText.toLowerCase());
        })
    }

}

