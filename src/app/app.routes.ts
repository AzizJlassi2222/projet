import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SupportComponent } from './support/support.component';  // Import the SupportComponent

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'statistique', component: StatistiqueComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'support', component: SupportComponent }  // Add the Support route here
];
