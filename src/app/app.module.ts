import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './_custom-module/material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RoutingModule } from './_custom-module/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

@NgModule({
   declarations: [
      AppComponent,
      FormControlComponent,
      SignupComponent,
      LoginComponent,
      TrainingComponent,
      PastTrainingComponent,
      NewTrainingComponent,
      CurrentTrainingComponent,
      WelcomeComponent,
      HeaderComponent,
      SidenavListComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      RoutingModule,
      FlexLayoutModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
