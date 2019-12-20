import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent, SettingsComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
