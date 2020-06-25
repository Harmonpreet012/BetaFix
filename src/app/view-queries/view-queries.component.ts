import { Component, OnInit } from '@angular/core';
import { QueryDataService } from '../shared/query.service';

@Component({
  selector: 'app-view-queries',
  templateUrl: './view-queries.component.html',
  styleUrls: ['./view-queries.component.css']
})
export class ViewQueriesComponent implements OnInit {

  queryData;

  constructor(private service: QueryDataService) {
    
  }

  ngOnInit(): void {
    this.service.GetQueries().subscribe(res=>(this.queryData=res));
  }

}
