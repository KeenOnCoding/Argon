import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
    selector: 'app-seatch',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit,OnDestroy {
    focus;
    focus1;
    focus5;

    searchText: string;
    vacantions: Array<Vacancy>;
    result: Array<Vacancy>;
    private destroy$ = new Subject();

    constructor(private router: Router) { }
    ngOnDestroy() {
        this.destroy$.next(null);
        this.destroy$.unsubscribe();
    }

    ngOnInit(): void {
        this.vacantions = [
            { id: 1, title: 'Manager', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '10K' },
            { id: 2, title: 'Developer', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '9K' },
            { id: 3, title: 'Plumber', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '11K' },
            { id: 4, title: 'Doctor', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '7K' },
            { id: 5, title: 'Director', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '3K' },
            { id: 6, title: 'CEO', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '12K' },
            { id: 7, title: 'Architect', company: 'Microsoft', description: 'MRaw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '16K' },
            { id: 8, title: 'DevOps', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '13K' },
            { id: 9, title: 'Q&A', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '14K' },
            { id: 10, title: 'Tester', company: 'Microsoft', description: 'Raw denim you probably have heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.Reprehenderit butcher retro keffiyeh dreamcatcher synth.', wage: '2K' }
        ];
    }
    goJob(id: any) {
        this.router.navigate(
            ['/job'],
            { queryParams: { id: id } }
        );
    }
    onSubmit(): void{
      
        this.result = this.vacantions.filter((vacantion) =>
        {
            console.log(vacantion['title'].toLowerCase().includes(this.searchText));
            return vacantion.title.toLowerCase().includes(this.searchText.toLowerCase());
        })
    }

}
export interface Vacancy {
    id: any;
    title: any;
    wage: any;
    company: any;
    description: any;
}
