import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmModal, StateType } from './confirm-modal.service';

import { MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

export interface ConfirmConifg {
  message?: string;
  okText?: string;
  cancelText?: string;
}

export type LoadingState = 'Loading' | 'Default';

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html',
})
export class ConfirmModalComponent {

  @Output()
  public ok: EventEmitter<StateType> = new EventEmitter();

  @Output()
  public cancel: EventEmitter<StateType> = new EventEmitter();

  @Input()
  public config: ConfirmConifg;

  @Input()
  public state: LoadingState = 'Default';

  private _okText: string;
  private _cancelText: string;
  private _message: string;

  constructor(
    public dialogRef: MdDialogRef<ConfirmModalComponent>
  ) {
    let config: ConfirmConifg = dialogRef._containerInstance.dialogConfig.data;
    this._message = config.message;
    this._okText = config.okText || 'controls.ok';
    this._cancelText = config.cancelText || 'controls.cancel';
  }

  get okText(): Observable<string> {
    return Observable.of(this._okText);
  }

  get cancelText(): Observable<string> {
    return Observable.of(this._cancelText);
  }

  get message(): Observable<string> {
    return Observable.of(this._message);
  }

}
