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
import { NewResearchComponent } from './research/new-research/new-research.component';
import { ResearchesComponent } from './research/researches/researches.component';
import { ProjectDisciplineComponent } from './control-panel/project-discipline/project-discipline.component';
import { ProjectClassificationTypeComponent } from './control-panel/project-classification-type/project-classification-type.component';
import { UpdateProjectComponent } from './proposal/new-proposal/update-project/update-project.component';
import { ManageAuthorComponent } from './research/new-research/manage-author/manage-author.component';
import { UpdateResearchComponent } from './research/update-research/update-research.component';
import { ResearchStatusComponent } from './research/researches/research-status/research-status.component';
import { ResearchPdfComponent } from './research/researches/research-pdf/research-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    NewProposalComponent,
    ProposalsComponent,
    NewResearchComponent,
    ResearchesComponent,
    ProjectDisciplineComponent,
    ProjectClassificationTypeComponent,
    UpdateProjectComponent,
    ManageAuthorComponent,
    UpdateResearchComponent,
    ResearchStatusComponent,
    ResearchPdfComponent,
  ],
   entryComponents: [
    UpdateProjectComponent,
    ManageAuthorComponent,
    ResearchStatusComponent,
    ResearchPdfComponent
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
