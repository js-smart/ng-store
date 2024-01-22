import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './features/employee/employee.component';
import { AsyncPipe } from '@angular/common';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, EmployeeComponent, RouterLink, AsyncPipe],
	templateUrl: './app.component.html',
})
export class AppComponent {
	protected readonly JSON = JSON;

	constructor() {}
}
