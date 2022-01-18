import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  public paramsId: number;
  public searchQuery: string;

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.paramsId = this.route.snapshot.params['id'];
    this.searchQuery = this.route.snapshot.queryParams['search'];
  }

}
