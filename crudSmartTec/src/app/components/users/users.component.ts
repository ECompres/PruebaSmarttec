import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from 'src/app/services/users.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',

})

export class UsersComponent implements OnInit {

  public users: any;
  encabezado = ['name', 'email', 'phone', 'username', 'website'];
  constructor(
    private _usersService: UsersService
  ) { }

  deleteContact() {

  }

  ngOnInit() {
    this._usersService.getContacts().subscribe(
      (res) => {
        this.users = res;
        console.log(this.users)
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
