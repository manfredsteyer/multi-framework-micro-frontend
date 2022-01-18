import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'mfe2',
        children: [
          { path: '', redirectTo: 'a', pathMatch: 'full' },
          { path: 'a', component: AComponent },
          { path: 'b/:id', component: BComponent },
        ],
      },
], { relativeLinkResolution: 'legacy' })
  ],
  declarations: [
    AComponent,
    BComponent,
    AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('mfe2-element', ce);
  }

}
