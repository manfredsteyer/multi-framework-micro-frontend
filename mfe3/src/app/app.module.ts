import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { RouterModule } from '@angular/router';
import { endsWith } from './router.utils';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    { matcher: endsWith('a'), component: AComponent },
    { matcher: endsWith('b'), loadChildren: () => import('./b/b.module').then(m => m.BModule)}
], { relativeLinkResolution: 'legacy' })
  ],
  declarations: [
    AComponent,
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
    customElements.define('mfe3-element', ce);
  }

}
