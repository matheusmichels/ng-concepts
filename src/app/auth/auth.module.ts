import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HighlightDirective } from './_directives/highlight.directive';

@NgModule({
  declarations: [SigninComponent, SignupComponent, HighlightDirective],
  imports: [CommonModule, AuthRoutingModule, FormsModule]
})
export class AuthModule {}
