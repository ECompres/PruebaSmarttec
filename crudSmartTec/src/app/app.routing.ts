import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CreateComponent } from './components/create/create.component';


const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "contacts", component: ContactsComponent },
    { path: "contact:/id", component: ContactComponent },
    { path: "create", component: CreateComponent },
    { path: "update:/id", component: CreateComponent },
    { path: "**", component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);