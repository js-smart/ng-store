import { Routes } from '@angular/router';
import { EmployeeComponent } from './features/employee/employee.component';
import { BookComponent } from './features/book/book.component';

export const routes: Routes = [
	{
		path: 'employee',
		redirectTo: 'employees',
	},
	{
		path: 'employees',
		component: EmployeeComponent,
	},
	{
		path: 'book',
		redirectTo: 'books',
	},
	{
		path: 'books',
		component: BookComponent,
	},
];
