import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { SanitizeHtmlPipe } from "./shared/pipes/sanitize-html.pipe";
import { CoreModule } from "./shared/modules/core.module";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SanitizeHtmlPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    CoreModule.forRoot()
  ],
  providers: [
    SanitizeHtmlPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
