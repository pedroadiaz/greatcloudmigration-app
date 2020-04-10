import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { AwsComponent } from './aws/aws.component';
import { AgileMethodologiesComponent } from './agile-methodologies/agile-methodologies.component';
import { BusinessOwnerComponent } from './business-owner/business-owner.component';
import { DotNetComponent } from './dot-net/dot-net.component';
import { ManagementComponent } from './management/management.component';
import { OtherLinksComponent } from './other-links/other-links.component';
import { SqlComponent } from './sql/sql.component';
import { VirtualRealityComponent } from './virtual-reality/virtual-reality.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AwsComponent,
    AgileMethodologiesComponent,
    BusinessOwnerComponent,
    DotNetComponent,
    ManagementComponent,
    OtherLinksComponent,
    SqlComponent,
    VirtualRealityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
