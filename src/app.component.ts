import { Component } from 'angular2/core';
@Component({
    selector: 'my-app',
    template: '<div>{{name}}</div>'
})
export class AppComponent {
    name: string = 'Angular 2 App';
}