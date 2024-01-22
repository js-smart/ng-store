import { Injectable } from '@angular/core';
import { Employee } from '../types/employee';
import { EntityStore } from '@js-smart/ng-store';

@Injectable({
	providedIn: 'root',
})
export class EmployeeStore extends EntityStore<Employee> {
	constructor() {
		super();
	}
}
