import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, delay, retryWhen } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

export const maxRetries = 3;
export const delayMs = 1000;

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
	constructor(private messageService: MessageService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		console.log('======================= interceptor Error =======================');

		return next.handle(request).pipe(
			retryWhen((error) =>
				error.pipe(
					mergeMap((error, index) => {
						if (index < maxRetries) {
							return of(error).pipe(delay(delayMs));
						}
						this.messageService.add({
							severity: 'error',
							summary: 'Error',
							detail: error?.message,
						});
						throw error;
					})
				)
			)
		);
	}
}
