import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AllContactComponent } from './all-contact/all-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EdotContactComponent } from './edot-contact/edot-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllContactComponent,
    AddContactComponent,
    ViewContactComponent,
    EdotContactComponent,
    PageNotFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
