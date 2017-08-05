import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { DataTableModule } from 'angular-2-data-table';

// import { AuthGuard } from './guards/auth.guard';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FetchData } from './services/FetchData.service';

import { AuthServiceService } from './services/auth-service.service'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/partials/sidenav/sidenav.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { DepartementComponent } from './components/departement/departement.component';
import { DepConfigComponent } from './components/departement/dep-config/dep-config.component';
import { CoursComponent } from './components/configuration/cours/cours.component';
import { ProgrammeComponent } from './components/configuration/programme/programme.component';
import { InstructeurComponent } from './components/configuration/instructeur/instructeur.component';
import { AnneeAcademiqueComponent } from './components/configuration/annee-academique/annee-academique.component';
import { EcoleComponent } from './components/configuration/ecole/ecole.component';
import { StudentComponent } from './components/student/student.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { RoomsComponent } from './components/departement/rooms/rooms.component';
import { ClassLevelsComponent } from './components/departement/class-levels/class-levels.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { RegistrationComponent } from './components/admission/registration/registration.component';
import { InscriptionComponent } from './components/admission/inscription/inscription.component';
import { BatchComponent } from './components/configuration/batch/batch.component';
import { UsersComponent } from './components/configuration/users/users.component';
import { NewAdmissionComponent } from './components/admission/inscription/new-admission/new-admission.component';
import { NewRegistrationComponent } from './components/admission/registration/new-registration/new-registration.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  {path: 'admission', component: AdmissionComponent,
    children: [
      { path: '', redirectTo: 'admition', pathMatch: 'full'},
      { path: 'registration', component: RegistrationComponent},
      { path: 'inscription', component: InscriptionComponent},
      { path: 'newRegistration', component: NewRegistrationComponent },
      { path: 'newAdmission', component: NewAdmissionComponent }
    ]

  },

  {
    path: 'departement', component: DepartementComponent,
    children: [
      { path: '', redirectTo: 'departement', pathMatch: 'full'},
      { path: 'departements', component: DepartementComponent},
      { path: 'rooms', component: RoomsComponent},
      { path: 'classLvls', component: ClassLevelsComponent},
      { path: 'depConfig', component: DepConfigComponent}
    ]

  },

  {
    path: 'student', component: StudentComponent,
    children: [
      { path: '', redirectTo: 'student', pathMatch: 'full'},
      { path: 'exams', component: DepartementComponent},
      { path: 'grades', component: RoomsComponent},
      { path: 'payment', component: ClassLevelsComponent},
      { path: 'students', component: DepConfigComponent}
    ]

  },

  {
    path: 'configuration', component: ConfigurationComponent,
    children: [
      { path: '', redirectTo: 'configuration', pathMatch: 'full'},
      { path: 'cours', component: CoursComponent},
      { path: 'dep-config', component: DepConfigComponent},
      { path: 'programme', component: ProgrammeComponent},
      { path: 'instructeur', component: InstructeurComponent},
      { path: 'ecole', component: EcoleComponent},
      { path: 'batch', component: BatchComponent },
      { path: 'users', component: UsersComponent }
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidenavComponent,
    ConfigurationComponent,
    NavbarComponent,
    InscriptionComponent,
    DepartementComponent,
    DepConfigComponent,
    CoursComponent,
    ProgrammeComponent,
    InstructeurComponent,
    AnneeAcademiqueComponent,
    EcoleComponent,
    StudentComponent,
    EmployeesComponent,
    RoomsComponent,
    ClassLevelsComponent,
    AdmissionComponent,
    RegistrationComponent,
    BatchComponent,
    UsersComponent,
    NewAdmissionComponent,
    NewRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [FlashMessagesService, FetchData, AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
