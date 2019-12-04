import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ContactService]
})

export class CreateComponent implements OnInit {

  public contact: Contact;

  constructor(
    private _contactService: ContactService
  ) {

    this.contact = new Contact(0, "", "", "");

  }

  onSubmit(form) {
    this._contactService.saveContact(this.contact).subscribe(
      (res) => {
        console.log(res);
        console.log(this.contact);
      },
      (err) => {
        console.log(err);
      }

    )
  }

  ngOnInit() {
  }

}
