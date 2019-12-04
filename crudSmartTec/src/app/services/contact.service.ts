import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';


@Injectable()
export class ContactService {

    public url: string;
    public headers: HttpHeaders;

    constructor(private _http: HttpClient) {

        this.url = "https://jsonplaceholder.typicode.com/users/";
        this.headers = new HttpHeaders().set("Content-Type", "application/json");

    }
    
    getContacts(): Observable<any> {
        return this._http.get(this.url, { headers: this.headers });
    };
    
    getContact(id): Observable<any> {
        return this._http.get(this.url + id, { headers: this.headers });
    };
    
    saveContact(contact: Contact): Observable<any> {
        let params = JSON.stringify(contact)
        return this._http.post(this.url, params, { headers: this.headers });
    };
    
    updateContact(contact: Contact): Observable<any> {
        let params = JSON.stringify(contact)
        return this._http.put(this.url + contact.id, params, { headers: this.headers });
    }

    deleteContact(id): Observable<any> {
        return this._http.delete(this.url + id, { headers: this.headers })
    };
}