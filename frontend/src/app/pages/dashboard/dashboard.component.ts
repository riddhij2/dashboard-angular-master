import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import {blogcard,blogcards} from './dashboard.data';

// core components


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  blogcards:blogcard[];

  constructor(private router: Router) { 

    this.blogcards=blogcards;
  }

  ngOnInit(): void {
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
