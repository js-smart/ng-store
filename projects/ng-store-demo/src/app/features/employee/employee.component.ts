import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { ProgressState } from '../../types/progress-state';
import { ProgressStore } from '../../store/progress.store';
import { EmployeeStore } from '../../store/employee.store';

@Component({
	selector: 'app-employee',
	standalone: true,
	imports: [EmployeeTableComponent],
	templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
	employeeService = inject(EmployeeService);
	employeeStore = inject(EmployeeStore);
	progressStore = inject(ProgressStore);

	ngOnInit(): void {
		this.progressStore.update({
			isLoading: true,
			isSuccess: false,
			isError: false,
			message: 'Loading employees...',
		} as ProgressState);

		this.employeeService.getEmployees().subscribe((employees) => {
			this.progressStore.update({
				isLoading: false,
				isSuccess: true,
				isError: false,
				message: 'Employees loaded.',
			} as ProgressState);
			this.employeeStore.setData(employees);
		});
	}
}
