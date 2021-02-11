import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-subscriber-create-dialog',
    templateUrl: './subscriber-create-dialog.component.html',
    styleUrls: ['./subscriber-create-dialog.component.scss']
})
export class SubscriberCreateDialogComponent implements OnInit {

    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<SubscriberCreateDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            firstName: ['', []],
            lastName: ['', []],
            nickname: ['', []]
        });
    }

    save(): void {
        this.dialogRef.close(this.form.value);
    }

    close(): void {
        this.dialogRef.close();
    }
}
