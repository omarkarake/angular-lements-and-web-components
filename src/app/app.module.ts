import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HelloElementComponent } from './hello-element/hello-element.component';

@NgModule({
  declarations: [
    HelloElementComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const helloElement = createCustomElement(HelloElementComponent, { injector: this.injector });
    customElements.define('hello-element', helloElement);
  }
}
