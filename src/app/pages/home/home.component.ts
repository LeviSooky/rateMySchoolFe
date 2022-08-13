import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {ReviewFormComponent} from "../../shared/review-form/review-form.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HomeComponent implements OnInit {
  @ViewChild(ReviewFormComponent)
  reviewForm!: ReviewFormComponent;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open() {
    this.modalService.open(this.reviewForm);
  }

  openModal(modal: any): void {
    this.modalService.open(modal, { windowClass: 'dark-modal', keyboard: false, size: "lg" , centered: true, backdrop: "static"});
  }
}
