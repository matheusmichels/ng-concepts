import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [SigninComponent, SignupComponent, HighlightDirective],
  imports: [CommonModule, AuthRoutingModule, FormsModule]
})
export class AuthModule {}
