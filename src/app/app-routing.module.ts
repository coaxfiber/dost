import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { NewProposalComponent } from './proposal/new-proposal/new-proposal.component';
import { ProposalsComponent } from './proposal/proposals/proposals.component';
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
