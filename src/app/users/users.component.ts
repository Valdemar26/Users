import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];

  constructor(
      private http: Http
  ) {
      this.http
          .get('https://jsonplaceholder.typicode.com/users')
          .subscribe(
              (response: Response) => {
                this.users = response.json();
              },
              (error: Response) => {
                this.users = [];
                console.log('Error occurred at UsersComponent');
              }
          )
  }

  ngOnInit() {
  }

}
