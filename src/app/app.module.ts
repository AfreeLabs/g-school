import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthServiceService } from './services/auth-service.service'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/partials/sidenav/sidenav.component';
import { AdmitionComponent } from './components/admition/admition.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { SaisieComponent } from './components/admition/saisie/saisie.component';
import { InscriptionComponent } from './components/admition/inscription/inscription.component';
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


export const firebaseConfig = {
  // Initialize Firebase
    apiKey: "AIzaSyC5IlDf9C79P7PkARpBOjX87HKWLY2SivQ",
    authDomain: "projetgmtg.firebaseapp.com",
    databaseURL: "https://projetgmtg.firebaseio.com",
    projectId: "projetgmtg",
    storageBucket: "projetgmtg.appspot.com",
    messagingSenderId: "525399268411"
}


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admition', component: AdmitionComponent,
    children: [
      { path: '', redirectTo: 'admition', pathMatch: 'full'},
      { path: 'saisie', component: SaisieComponent},
      { path: 'inscription', component: InscriptionComponent}
    ]

  },

  {path: 'departement', component: DepartementComponent,
    children: [
      { path: '', redirectTo: 'departement', pathMatch: 'full'},
      { path: 'departements', component: DepartementComponent},
      { path: 'rooms', component: RoomsComponent},
      { path: 'classLvls', component: ClassLevelsComponent},
      { path: 'depConfig', component: DepConfigComponent}
    ]

  },

  {path: 'student', component: StudentComponent,
    children: [
      { path: '', redirectTo: 'student', pathMatch: 'full'},
      { path: 'exams', component: DepartementComponent},
      { path: 'grades', component: RoomsComponent},
      { path: 'payment', component: ClassLevelsComponent},
      { path: 'students', component: DepConfigComponent}
    ]

  },

  {path: 'configuration', component: ConfigurationComponent,
    children: [
      { path: '', redirectTo: 'configuration', pathMatch: 'full'},
      { path: 'cours', component: CoursComponent},
      { path: 'dep-config', component: DepConfigComponent},
      { path: 'programme', component: ProgrammeComponent},
      { path: 'instructeur', component: InstructeurComponent},
      { path: 'ecole', component: EcoleComponent}
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidenavComponent,
    AdmitionComponent,
    ConfigurationComponent,
    NavbarComponent,
    SaisieComponent,
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
    ClassLevelsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
