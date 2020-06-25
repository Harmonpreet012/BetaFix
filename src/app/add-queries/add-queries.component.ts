import { Component, OnInit } from '@angular/core';
import { NgForm  } from '@angular/forms'
import { QueryDataService } from '../shared/query.service';
@Component({
  selector: 'app-add-queries',
  templateUrl: './add-queries.component.html',
  styleUrls: ['./add-queries.component.css']
})
export class AddQueriesComponent implements OnInit {

  constructor(private service: QueryDataService) { }

  ngOnInit(): void {
  }
  addQuery(form :NgForm)
  {
    this.service.AddQuery(1, form.value.queryHeading, form.value.queryDescription, form.value.queryAuthor);
  }


}
