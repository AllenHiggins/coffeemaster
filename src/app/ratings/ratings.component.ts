import { Component, OnInit } from '@angular/core';
import { Review } from '../../assets/Models/review.Model';
import { ReviewService } from '../Services/review.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  reviews: Review[] = [];
  constructor(private reviewsService: ReviewService) { }

  ngOnInit() {
    this.reviews = this.reviewsService.getReviews();
  }

}
