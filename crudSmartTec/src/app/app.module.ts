import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { ContactService } from './services/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    UpdateComponent,
    ContactComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    appRoutingProviders,
    ContactService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
