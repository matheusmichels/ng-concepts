import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent, SettingsComponent, HeaderComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
