import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'mfe1', component: WrapperComponent, data: { importName: 'mfe1', elementName: 'mfe1-element' }},
      { path: 'mfe2', component: WrapperComponent, data: { importName: 'mfe2', elementName: 'mfe2-element' }},
      { path: 'mfe3', component: WrapperComponent, data: { importName: 'mfe3', elementName: 'mfe3-element' }},
    ])
  ],
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
