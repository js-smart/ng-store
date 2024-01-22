import { Injectable } from '@angular/core';
import { ProgressState } from '../types/progress-state';
import { Store } from '@js-smart/ng-store';

@Injectable({
	providedIn: 'root',
})
export class ProgressStore extends Store<ProgressState> {
	constructor() {
		super();
	}
}
