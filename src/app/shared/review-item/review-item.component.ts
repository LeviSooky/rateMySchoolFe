import {Component, Input, OnInit} from '@angular/core';
import {TeacherReview} from "../models/teacher-review";
import {Moment} from "moment";


@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {
  reviews: TeacherReview[] = [];
  @Input()
  pagedData: any; //TODO find something
  Moment?: Moment;


  constructor() { }

  ngOnInit(): void {
    this.reviews = [new TeacherReview(3.5, "kis jancsi nagyon fancsi" )];
  }

}
