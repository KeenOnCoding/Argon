import { Component, OnInit } from '@angular/core';
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
    constructor(private modalService: NgbModal, calendar: NgbCalendar) {
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }

  ngOnInit(): void {
  }

}
