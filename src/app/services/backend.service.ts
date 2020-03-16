import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BackendService {
	private baseUrl = 'http://jsonplaceholder.typicode.com/posts';

	constructor(private http: HttpClient) {}

	get(queryString: string) {
		let url = `${this.baseUrl}?${queryString}`;
		return this.http.get(url).pipe(map((res: any) => res), catchError((err) => this.onRequestError(err)));
	}

	onRequestError(err) {
		const statusCode = err.status;
		const errorText = err.statusText;

		const error = {
			statusCode: statusCode,
			error: errorText
		};

		console.log(error);

		return Observable.throw(error);
	}
}
