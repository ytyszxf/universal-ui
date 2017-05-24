"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let PortalLayoutCmp = class PortalLayoutCmp {
    constructor() {
        this.toggleSidenav = new core_1.EventEmitter();
    }
    sideNavToggleClick() {
        this.toggleSidenav.emit();
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], PortalLayoutCmp.prototype, "loading", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], PortalLayoutCmp.prototype, "showSidenav", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], PortalLayoutCmp.prototype, "rootSection", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], PortalLayoutCmp.prototype, "menuVisible", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", Object)
], PortalLayoutCmp.prototype, "toggleSidenav", void 0);
PortalLayoutCmp = tslib_1.__decorate([
    core_1.Component({
        selector: 'cm-portal-layout',
        templateUrl: './portal-layout.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PortalLayoutCmp);
exports.PortalLayoutCmp = PortalLayoutCmp;
//# sourceMappingURL=portal-layout.component.js.map