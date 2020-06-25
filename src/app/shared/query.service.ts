import { Injectable } from '@angular/core';
import { Query } from './query.mode';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
    providedIn: 'root'
})
export class QueryDataService
{
    queries: Query[]=[];
    
    constructor(private afs: AngularFirestore){

    }

    AddQuery(QueryNumber: number,Heading: string, Description: string, Author:string    )
    {
        this.queries.push( new Query(QueryNumber , Heading, Description, Author, new Date()));
        this.afs.collection("Queries").add({
            QueryAuthor: Author,
            QueryDate: new Date(),
            QueryDescription: Description,
            QueryHeading: Heading
        });
    }
    GetQueries()
    {
        return this.afs.collection("Queries").snapshotChanges();
    }
}