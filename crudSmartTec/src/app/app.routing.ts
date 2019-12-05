import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { UsersComponent } from './components/users/users.component';
import { UpdateComponent } from './components/update/update.component';


const appRoutes: Routes = [
    { path: "", component: ContactsComponent },
    { path: "users", component: UsersComponent },
    { path: "contact/:id", component: ContactComponent },
    { path: "create", component: CreateComponent },
    { path: "update/:id", component: UpdateComponent },
    { path: "**", component: ContactsComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);