import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RestService } from "./service/rest.service";
import { HttpClient } from "@angular/common/http";
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,environment.production ? [] : AkitaNgDevtools.forRoot({ shallow: false, sortAlphabetically: true }),],
  providers: [RestService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
