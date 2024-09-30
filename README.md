# Element

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

run `ng build --configuration production --output-hashing=none`. The build artifacts will be stored in the `dist/` directory. for custom element

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

tips to understand:

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



Detailed Breakdown:
Imports:

NgModule: This is the decorator that defines an Angular module. Modules are containers for a cohesive block of code dedicated to a specific application domain, a workflow, or some closely related set of capabilities.
Injector: Provides a way to resolve dependencies using Angular's dependency injection system.
BrowserModule: This is needed when running the application in a browser. It includes core directives like ngIf and ngFor.
createCustomElement: This function converts an Angular component into a custom element, allowing it to be used as a Web Component.
AppModule:

This class is the root module of the Angular application. It declares the components that belong to this module and imports other necessary Angular modules.
ngDoBootstrap:

In a typical Angular app, the bootstrap array inside @NgModule automatically bootstraps the root component. However, since Angular Elements are being used, you manually bootstrap the application using ngDoBootstrap.
createCustomElement(): This converts the Angular component HelloElementComponent into a native web custom element. The custom element can be used like an HTML tag (<hello-element>), and the injector ensures the Angular dependency injection system is available to the element.
customElements.define(): This is part of the Web Components standard. It registers a custom element with the browser, allowing you to use it as an HTML element. The custom element must contain a hyphen in its name (e.g., 'hello-element').
This code allows you to use the HelloElementComponent as a Web Component in any HTML file or project, including non-Angular projects.
