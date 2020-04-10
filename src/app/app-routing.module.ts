import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwsComponent } from './aws/aws.component';
import { AgileMethodologiesComponent } from './agile-methodologies/agile-methodologies.component';
import { BusinessOwnerComponent } from './business-owner/business-owner.component';
import { DotNetComponent } from './dot-net/dot-net.component';
import { ManagementComponent } from './management/management.component';
import { OtherLinksComponent } from './other-links/other-links.component';
import { SqlComponent } from './sql/sql.component';
import { VirtualRealityComponent } from './virtual-reality/virtual-reality.component';

const routes: Routes = [
  { path: 'aws', component: AwsComponent },
  { path: 'agile-methodologies', component: AgileMethodologiesComponent },
  { path: 'business-owner', component: BusinessOwnerComponent},
  { path: 'dot-net', component: DotNetComponent },
  { path: '', component: DotNetComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'other-links', component: OtherLinksComponent },
  { path: 'sql', component: SqlComponent },
  { path: 'virtual-reality', component: VirtualRealityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
