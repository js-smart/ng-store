import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book } from '../types/book';
import { BASE_API_URL } from '../constants/api.constants';

@Injectable({
	providedIn: 'root',
})
export class BookService {
	httpClient = inject(HttpClient);

	getBooks() {
		return this.httpClient.get<Book[]>(`${BASE_API_URL}/books`);
	}
}
