export class Query
{
    QueryNumber: number;
    Heading: string;
    Description: string;
    Author: string;
    Date: Date;

    constructor(QueryNumber: number, Heading: string, Desctiption: string, Author: string, Date: Date)
    {
        this.QueryNumber=QueryNumber;
        this.Heading= Heading;
        this.Description= Desctiption;
        this.Author= Author;
        this.Date= Date;
    }
}