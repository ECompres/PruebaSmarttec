import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  public contacts: Contact[];
  constructor(
    private _contactService: ContactService
  ) { }

  ngOnInit() {
    this._contactService.getContacts().subscribe(
      (res) => {
        this.contacts = res;
        console.log(this.contacts)
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
