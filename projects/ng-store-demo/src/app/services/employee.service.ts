import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../types/employee';
import { BASE_API_URL } from '../constants/api.constants';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService {
	httpClient = inject(HttpClient);

	getEmployees() {
		return this.httpClient.get<Employee[]>(`${BASE_API_URL}/employees`);
	}
}
