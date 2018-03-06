// module app component.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Component.

import { MatButtonModule,
         MatCheckboxModule,
         MatToolbarModule,
         MatIconModule,
         MatMenuModule,
         MatSidenavModule,
         MatListModule,
         MatCardModule,
         MatDividerModule,
         MatSlideToggleModule,
         MatTableModule,
         MatFormFieldModule,
         MatInputModule,
         MatDialogModule,
         MatStepperModule,
         MatChipsModule,
         MatSliderModule,
         MatGridListModule,
         MatTabsModule,
         MatProgressSpinnerModule } from '@angular/material';

// Material CDK Component
import { CdkTableModule } from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { CardService } from './card.service';
import { AppRoutingModule, routingComponents } from './/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule ,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatSliderModule,
    MatGridListModule,
    CdkTableModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
