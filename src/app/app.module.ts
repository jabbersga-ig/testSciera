import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleHomeComponent } from './people-home/people-home.component';
import { IgxNavbarModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgxButtonGroupModule, IgxButtonModule, IgxExpansionPanelModule, IgxBadgeModule, IgxInputGroupModule, IgxDatePickerModule, IgxCheckboxModule, IgxDialogModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { AddPersonComponent } from './add-person/add-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleHomeComponent,
    EditPersonComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxListModule,
    IgxAvatarModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxExpansionPanelModule,
    IgxBadgeModule,
    FormsModule,
    IgxInputGroupModule,
    IgxDatePickerModule,
    IgxCheckboxModule,
    IgxDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
