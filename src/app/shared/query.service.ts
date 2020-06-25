import { Injectable } from '@angular/core';
import { Query } from './query.mode';

@Injectable({
    providedIn: 'root'
})
export class QueryDataService
{
    queries: Query[]=[];
    
    constructor(){

    }

    AddQuery(QueryNumber: number,Heading: string, Description: string, Author:string    )
    {
        this.queries.push( new Query(QueryNumber , Heading, Description, Author, new Date()));
    }
    GetQueries()
    {
        return this.queries;
    }
}