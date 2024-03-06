import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CokctailsListComponent } from './cokctails-list/cokctails-list.component';
import { CokctailsDetailsComponent } from './cokctails-details/cokctails-details.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CokctailsListComponent, CokctailsDetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
