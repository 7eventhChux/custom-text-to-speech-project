import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioPlayerComponent } from './pages/audio-player/audio-player.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AboutComponent } from './pages/about/about.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: LandingPageComponent},
  { path: 'explore', component: AudioPlayerComponent },
  { path: 'about', component: AboutComponent},
  { path: 'feedback', component: FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
