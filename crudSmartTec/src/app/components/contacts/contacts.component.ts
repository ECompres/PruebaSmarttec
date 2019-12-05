import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',

})
export class ContactsComponent implements OnInit {

  public contacts;

  encabezado = ['name', 'email', 'phone', 'actions'];

  constructor(
    private _contactService: ContactService,
    private _router: Router
  ) { }

  deleteContact(id) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id == id) {
        this.contacts.splice(i, 1);
      }
    }
    this._contactService.deleteContact(id);
    this._router.navigateByUrl('/create', { skipLocationChange: true }).then(() => {
      this._router.navigate(['/contacts'])
    })

  }
  editContact(id) {
    this._router.navigate(['/update/', id])
  }
  ngOnInit() {
    this.contacts = this._contactService.getContacts();
  }

}

