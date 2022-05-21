import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HeaderInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		console.log('======================= interceptor =======================')
		let contentType = 'application/json';
		if (req.headers.has('Content-Type')){
			contentType = req.headers.get('Content-Type') || contentType;
		}

		req = req.clone({
			setHeaders: {
				'Authorization': `Bearer REPLACE_WITH_TOKEN`,
				'Content-Type': contentType
			}
		});
		console.log('======================= interceptor =======================', req);

		return next.handle(req);
	}
}
