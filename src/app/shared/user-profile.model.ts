export class UserProfile
{
    UserId: string;
    Email :string;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    ImagePath: string;

    constructor(UserId, Email, FirstName, LastName, PhoneNumer)
    {
        this.Email=Email;
        this.UserId=UserId;
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.PhoneNumber=PhoneNumer;
    }
}