import { EventEmitter } from '@angular/core';
import { StateType } from './confirm-modal.service';
import { MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
export interface ConfirmConifg {
    message?: string;
    okText?: string;
    cancelText?: string;
}
export declare type LoadingState = 'Loading' | 'Default';
export declare class ConfirmModalComponent {
    dialogRef: MdDialogRef<ConfirmModalComponent>;
    ok: EventEmitter<StateType>;
    cancel: EventEmitter<StateType>;
    config: ConfirmConifg;
    state: LoadingState;
    private _okText;
    private _cancelText;
    private _message;
    constructor(dialogRef: MdDialogRef<ConfirmModalComponent>);
    readonly okText: Observable<string>;
    readonly cancelText: Observable<string>;
    readonly message: Observable<string>;
}
