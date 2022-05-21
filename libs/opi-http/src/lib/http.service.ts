import { lastValueFrom } from 'rxjs';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Options {
	headers?: HttpHeaders;
	params?: HttpParams;
}

@Injectable({providedIn: 'root'})
export class HttpService {
	constructor(private readonly http: HttpClient) {}

	public get<T>(serviceUrl: string, opts?: Options): Promise<T> {
		const response$ = this.http.get<T>(serviceUrl, opts)
		return lastValueFrom(response$);
	}

	public post<T, R>(serviceUrl: string, body: T, opts?: Options): Promise<R> {
		const response$ = this.http.post<R>(serviceUrl, body, opts)
		return lastValueFrom(response$);
	}

	public put<T, R>(serviceUrl: string, body: T, opts?: Options): Promise<R> {
		const response$ = this.http.put<R>(serviceUrl, body, opts)
		return lastValueFrom(response$);
	}

	public delete<T>(serviceUrl: string, opts?: Options): Promise<T> {
		const response$ = this.http.delete<T>(serviceUrl, opts);
		return lastValueFrom(response$);
	}

	public getFile(serviceUrl: string, fileName:string){
		this.http.get(serviceUrl, {responseType: 'blob' as 'json'})
		.subscribe(response => this.downLoadFile(response, "application/ms-excel",fileName));
	}

	private downLoadFile(data: any, type: string, fileName :string)  {
		const a = document.createElement('a');
		document.body.appendChild(a);
		a.style.setProperty('display','none');
		const blob = new Blob([data], {type: type});
		const url = window.URL.createObjectURL(blob);
		a.href = url; a.download = fileName;
		a.click();
		window.URL.revokeObjectURL(url);
	}

}
