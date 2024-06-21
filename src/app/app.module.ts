import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleChartComponent } from './sample-chart/sample-chart.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyInterceptor } from './service/MyIterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:MyInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
