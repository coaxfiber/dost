import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { NewProposalComponent } from './proposal/new-proposal/new-proposal.component';
import { ProposalsComponent } from './proposal/proposals/proposals.component';
import { NewResearchComponent } from './research/new-research/new-research.component';
import { ResearchesComponent } from './research/researches/researches.component';
import { UpdateResearchComponent } from './research/update-research/update-research.component';
import { ProjectDisciplineComponent } from './control-panel/project-discipline/project-discipline.component';
import { Research0Component } from './research/researches/research-0/research-0.component';
import { Research1Component } from './research/researches/research-1/research-1.component';
import { Research2Component } from './research/researches/research-2/research-2.component';
import { RolesComponent } from './user-management/roles/roles.component';
import { AssignUserRolesComponent } from './user-management/assign-user-roles/assign-user-roles.component';
import { Research3Component } from './research/researches/research-3/research-3.component';
import { Research4Component } from './research/researches/research-4/research-4.component';
import { Research5Component } from './research/researches/research-5/research-5.component';
import { PendingComponent } from './research/research-approval/pending/pending.component';
import { RegistrationComponent } from './registration/registration.component';
import { WithIssuesComponent } from './research/research-approval/with-issues/with-issues.component';
import { PublishedComponent } from './research/research-approval/published/published.component';
import { CompanyComponent } from './control-panel/company/company.component';
import { GrantManagementComponent } from './control-panel/grant-management/grant-management.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
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
        { path: 'update-research', component: UpdateResearchComponent, outlet: 'div' },
        { path: 'researches-Draft', component: Research0Component, outlet: 'div' },
        { path: 'researches-Pending', component: Research1Component, outlet: 'div' },
        { path: 'researches-Published', component: Research2Component, outlet: 'div' },
        { path: 'researches-WithIssues', component: Research3Component, outlet: 'div' },
        { path: 'researches-ApprovedEdit', component: Research4Component, outlet: 'div' },
        { path: 'researches-Trash', component: Research5Component, outlet: 'div' },
        { path: 'roles', component: RolesComponent, outlet: 'div' },
        { path: 'assign-user-roles', component: AssignUserRolesComponent, outlet: 'div' },
        { path: 'researches-PendingApproval', component: PendingComponent, outlet: 'div' },
        { path: 'researches-WithIssue', component: WithIssuesComponent, outlet: 'div' },
        { path: 'Published', component: PublishedComponent, outlet: 'div' },
        { path: 'Company-Management', component: CompanyComponent, outlet: 'div' },
        { path: 'Call-for-proposals', component: GrantManagementComponent, outlet: 'div' },
      ]
  },
  {
    path: '**', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
