import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UsersService {

    public url: string;
    public headers: HttpHeaders;

    constructor(private _http: HttpClient) {

        this.url = "https://jsonplaceholder.typicode.com/users";
        this.headers = new HttpHeaders().set("Content-Type", "application/json");

    }
    
    getContacts(): Observable<any> {
        return this._http.get(this.url, { headers: this.headers });
    };
   
}