import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [ Location ]
})
export class PostsComponent implements OnInit {
  posts: any[];
  private id: any;

  constructor(
      private http: Http,
      private route: ActivatedRoute,
      public location: Location
  ) {
    this.id = this.route.params.subscribe(params => {
      this.http
          .get('https://jsonplaceholder.typicode.com/posts?userId=' + params['id'])
          .subscribe(
              (response: Response) => {
                this.posts = response.json();
              },
              (error: Response) => {
                console.log('Error occurred at PostsComponent');
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

























































