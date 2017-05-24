"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const material_1 = require("@angular/material");
const Observable_1 = require("rxjs/Observable");
let ConfirmModalComponent = class ConfirmModalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.ok = new core_1.EventEmitter();
        this.cancel = new core_1.EventEmitter();
        this.state = 'Default';
        let config = dialogRef._containerInstance.dialogConfig.data;
        this._message = config.message;
        this._okText = config.okText || 'controls.ok';
        this._cancelText = config.cancelText || 'controls.cancel';
    }
    get okText() {
        return Observable_1.Observable.of(this._okText);
    }
    get cancelText() {
        return Observable_1.Observable.of(this._cancelText);
    }
    get message() {
        return Observable_1.Observable.of(this._message);
    }
};
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], ConfirmModalComponent.prototype, "ok", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], ConfirmModalComponent.prototype, "cancel", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], ConfirmModalComponent.prototype, "config", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], ConfirmModalComponent.prototype, "state", void 0);
ConfirmModalComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'confirm-modal',
        templateUrl: './confirm-modal.component.html',
        styleUrls: ['./confirm-modal.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [material_1.MdDialogRef])
], ConfirmModalComponent);
exports.ConfirmModalComponent = ConfirmModalComponent;
//# sourceMappingURL=confirm-modal.component.js.map