import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
} from '@angular/material';

import { PromisesComponent } from './promises/promises.component';
import { HomeComponent } from './home/home.component';
import { CustomerService } from './shared/services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { EvtsObsComponent } from './evts-obs/evts-obs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideEffectsComponent } from './side-effects/side-effects.component';
import { PicsumComponent } from './picsum/picsum.component';
import { NestedComponent } from './nested/nested.component';
// import { HttpModule } from '@angular/http';
import { NestedService } from './nested/nested.service';
import { BaconComponent } from './bacon/bacon.component';

@NgModule({
  declarations: [
    AppComponent,
    PromisesComponent,
    HomeComponent,
    EvtsObsComponent,
    SideEffectsComponent,
    PicsumComponent,
    NestedComponent,
    BaconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [CustomerService, NestedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
