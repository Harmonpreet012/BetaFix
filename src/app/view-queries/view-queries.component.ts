import { Component, OnInit } from '@angular/core';
import { QueryDataService } from '../shared/query.service';

@Component({
  selector: 'app-view-queries',
  templateUrl: './view-queries.component.html',
  styleUrls: ['./view-queries.component.css']
})
export class ViewQueriesComponent implements OnInit {

  queryData;

  constructor(service: QueryDataService) {
    
    this.queryData=service.GetQueries();
  }

  ngOnInit(): void {
  }

}
