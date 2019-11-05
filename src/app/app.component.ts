import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<div>{{ title }}</div><router-outlet></router-outlet>'
})
export class AppComponent {
    title = 'app';
}
