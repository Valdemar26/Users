import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [ Location ]
})
export class CommentsComponent implements OnInit {
  comment: any[];
  private id: any;

  constructor(
      private http: Http,
      private route: ActivatedRoute,
      public location: Location
  ) {
    this.id = this.route.params.subscribe(params => {
      this.http
          .get('https://jsonplaceholder.typicode.com/posts/' +params['id'])
          .subscribe(
              (response: Response) => {
                this.comment = response.json();
              },
              (error: Response) => {
                console.log('Error occurred at CommentsComponent');
              }
          )
    })
  }

  ngOnInit() {
  }

  goBack(): void {
      this.location.back();
  }

}
