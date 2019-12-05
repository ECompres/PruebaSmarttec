import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  providers: [ContactService]
})

export class CreateComponent implements OnInit {

  public contacts: Array<any>;
  public contact: Contact;
  constructor(
    private _contactService: ContactService
  ) {
    this.contact = new Contact(0, "", "", "");
  }


  onSubmit() {
    this.contact.id = this.contacts.length + 1;
    this.contacts.push(this.contact);
    this._contactService.addContact(this.contact);
    Swal.fire(
      'Hecho!',
      'Contacto agregado.',
      'success'
    );
    this.contact.name = "";
    this.contact.email = "";
    this.contact.phoneNumber = "";

  }

  ngOnInit() {
    this.contacts = this._contactService.getContacts();
  }

}
