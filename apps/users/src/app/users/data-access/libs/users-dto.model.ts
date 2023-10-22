export enum Phone {
    Admin = "4695",
    User = "0000",
    Mentor = "1122"
  }

export interface  User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    Phone;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

