import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { NewProposalComponent } from './proposal/new-proposal/new-proposal.component';
import { ProposalsComponent } from './proposal/proposals/proposals.component';
import { NewResearchComponent } from './research/new-research/new-research.component';
import { ResearchesComponent } from './research/researches/researches.component';
import { ProjectDisciplineComponent } from './control-panel/project-discipline/project-discipline.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
      children: [
        { path: 'home', component: HomeComponent, outlet: 'div' },
        { path: 'new-proposal', component: NewProposalComponent, outlet: 'div' },
        { path: 'proposals', component: ProposalsComponent, outlet: 'div' },
        { path: 'new-research', component: NewResearchComponent, outlet: 'div' },
        { path: 'researches', component: ResearchesComponent, outlet: 'div' },
        { path: 'discipline', component: ProjectDisciplineComponent, outlet: 'div' },
      ]
  },
  {
    path: '**', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
