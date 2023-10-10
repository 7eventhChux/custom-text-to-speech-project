import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgSelectModule } from '@ng-select/ng-select';
import { AudioPlayerComponent } from './pages/audio-player/audio-player.component';
import { FilterPipe } from './shared/filter.pipe';
import { AudioService } from './services/audio.service';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioPlayerComponent,
    FilterPipe,
    LandingPageComponent,
    SidebarComponent,
    HeaderComponent,
    AboutComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // NgSelectModule
  ],
  providers: [AudioService],
  bootstrap: [AppComponent]
})
export class AppModule { }


