import { Injectable } from '@angular/core';
import { Book } from '../types/book';
import { EntityStore } from '@js-smart/ng-store';

@Injectable({
	providedIn: 'root',
})
export class BookStore extends EntityStore<Book> {
	constructor() {
		super();
	}
}
