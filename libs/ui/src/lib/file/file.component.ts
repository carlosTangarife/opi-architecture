import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'opi-file',
	templateUrl: './file.component.html',
	styleUrls: ['./file.component.scss'],
	providers: [MessageService],
})
export class FileComponent {
	uploadedFiles: any[] = [];

	constructor(private messageService: MessageService) {}

	onUpload(event: any) {
		for (const file of event.files) {
			this.uploadedFiles.push(file);
		}

		this.messageService.add({
			severity: 'info',
			summary: 'Success',
			detail: 'File Uploaded',
		});
	}
}
