import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',

})
export class UpdateComponent implements OnInit {



  public contacts: Array<any>;
  public id: number;
  public contact: Contact;
  constructor(
    private _contactService: ContactService,
    private _route: ActivatedRoute
  ) { }
  @ViewChild("updateContactForm", { static: true }) updateContactForm: any;
  ngOnInit() {
    this._route.params.subscribe(
      (params) => {
        this.id = params.id;
        console.log(this.id);
      }
    );

    this.contacts = this._contactService.getContacts();
    this.contact = this.contacts.find(x => x.id == this.id);
    console.log(this.contact);

  }

  onSubmit() {
    if (this.updateContactForm.value)
      this._contactService.updateContact(this.contact, this.updateContactForm.value);
    Swal.fire(
      'Hecho!',
      'Contacto editado',
      'success'
    )
    this.contact.name = "";
    this.contact.email = "";
    this.contact.phoneNumber = "";
  }

}
