import { Injectable } from '@angular/core';
export class initializeContacts {
    tempContacts() {
        if (localStorage.getItem('contacts') === null || localStorage.getItem('contacts') == undefined) {
            let contactsArr = [
                {
                    id: 1,
                    name: 'Elías Comprés',
                    email: 'ecompres2017@gmail.com',
                    phoneNumber: "8298677416"
                },
                {
                    id: 2,
                    name: 'Elías Aquino',
                    email: 'ecompres2018@gmail.com',
                    phoneNumber: "8298677417"
                },
            ]

            localStorage.setItem('contacts', JSON.stringify(contactsArr));

        }
    }
}

@Injectable()
export class ContactService extends initializeContacts {

    public contactsArr = JSON.parse(localStorage.getItem('contacts'));


    constructor() {

        super();
        this.tempContacts();

    }

    getContacts() {

        return this.contactsArr;
    }

    addContact(contact) {
        this.contactsArr.push(contact);
        localStorage.setItem('contacts', JSON.stringify(this.contactsArr));
    }

    deleteContact(id) {

        for (let i = 0; i < this.contactsArr.lenght; i++) {
            if (this.contactsArr[i].id == id) {
                this.contactsArr.splice(i, 1);
            }
        }
        localStorage.setItem('contacts', JSON.stringify(this.contactsArr));

    }
    updateContact(c1, c2) {

        for (let i = 0; i < this.contactsArr.lenght; i++) {
            if (this.contactsArr[i].id == c1.id) {
                this.contactsArr[i].id = c2;
            }
        }

        localStorage.setItem('contacts', JSON.stringify(this.contactsArr));

    }
}