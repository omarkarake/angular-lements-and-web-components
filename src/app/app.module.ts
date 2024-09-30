import { NgModule, Injector } from '@angular/core'; // Import NgModule and Injector for dependency injection
import { BrowserModule } from '@angular/platform-browser'; // Import the BrowserModule, required for browser applications
import { createCustomElement } from '@angular/elements'; // Import createCustomElement for converting Angular components to custom elements (web components)
import { HelloElementComponent } from './hello-element/hello-element.component'; // Import the custom Angular component

@NgModule({
  declarations: [
    HelloElementComponent // Declare the HelloElementComponent as part of this module
  ],
  imports: [
    BrowserModule // Import BrowserModule, which is necessary to run the app in the browser
  ]
})
export class AppModule {
  // The constructor injects the Angular Injector service, which is used to create custom elements.
  constructor(private injector: Injector) {}

  /**
   * The `ngDoBootstrap` method is called to manually bootstrap the application.
   * Unlike normal Angular applications, where `AppComponent` is bootstrapped automatically,
   * we manually bootstrap here because we're working with Angular Elements.
   */
  ngDoBootstrap() {
    // `createCustomElement` converts the Angular component (HelloElementComponent) into a custom element (a Web Component)
    // It requires an injector, which provides the Angular DI (Dependency Injection) system to the element.
    const helloElement = createCustomElement(HelloElementComponent, { injector: this.injector });

    // Register the custom element with the browser's Custom Elements API.
    // The first argument 'hello-element' is the name of the custom element (must contain a hyphen).
    // The second argument is the class that defines its behavior (the Angular component converted into a custom element).
    customElements.define('hello-element', helloElement);
  }
}
