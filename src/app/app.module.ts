import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { GlobalService } from './global.service';
import { HttpModule } from '@angular/http';
import { StorageServiceModule } from 'angular-webstorage-service';
import { NewProposalComponent } from './proposal/new-proposal/new-proposal.component';
import { ProposalsComponent } from './proposal/proposals/proposals.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    NewProposalComponent,
    ProposalsComponent,
  ],
   entryComponents: [
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,StorageServiceModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
