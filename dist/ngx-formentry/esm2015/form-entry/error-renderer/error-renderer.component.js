/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import * as _ from 'lodash';
import { Form } from '../form-factory/form';
import { ValidationFactory } from '../form-factory/validation.factory';
import { FormErrorsService } from '../services/form-errors.service';
export class ErrorRendererComponent {
    /**
     * @param {?} validationFactory
     * @param {?} formErrorsService
     */
    constructor(validationFactory, formErrorsService) {
        this.validationFactory = validationFactory;
        this.formErrorsService = formErrorsService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    showErrors() {
        return !this.form.valid && this.form.showErrors;
    }
    /**
     * @return {?}
     */
    get errorNodes() {
        const /** @type {?} */ invalidControls = this.form.markInvalidControls(this.form.rootNode, []);
        return invalidControls;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getControlError(node) {
        const /** @type {?} */ errors = node.control.errors;
        if (errors) {
            return this.validationFactory.errors(errors, node.question);
        }
        return [];
    }
    /**
     * @param {?} errorNode
     * @return {?}
     */
    announceErrorField(errorNode) {
        const /** @type {?} */ nodes = this.form.searchNodeByQuestionId(errorNode.path.substring(0, errorNode.path.indexOf('.')));
        _.forEach(nodes, (node) => {
            if (node.question.renderingType === 'page') {
                const /** @type {?} */ pageIndex = this.getPageIndex(node);
                this.formErrorsService.announceErrorField(pageIndex + ',' + errorNode.question.key);
            }
        });
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getPageIndex(node) {
        const /** @type {?} */ questionGroup = /** @type {?} */ (this.form.rootNode.question);
        return questionGroup.questions.indexOf(node.question);
    }
}
ErrorRendererComponent.decorators = [
    { type: Component, args: [{
                selector: 'error-renderer',
                template: `<div *ngIf="showErrors()" class="container">
<ul class="list-group">
  <li class="list-group-item list-group-item-warning" *ngFor="let errorNode of errorNodes" (click)=announceErrorField(errorNode)>
    <div class="error" *ngIf="errorNode.control.valid == false">
      <h4>{{errorNode.question.label}}</h4>
      <span class="text-danger"> {{getControlError(errorNode)}}</span>
    </div>
  </li>
</ul>
</div>
`,
                styles: [`ul{list-style:none}.list-group-item{padding:2px 15px;cursor:pointer}ul li:hover{background-color:#fff}h4{margin-top:7px;margin-bottom:7px}`]
            },] },
];
/** @nocollapse */
ErrorRendererComponent.ctorParameters = () => [
    { type: ValidationFactory, },
    { type: FormErrorsService, },
];
ErrorRendererComponent.propDecorators = {
    "form": [{ type: Input },],
};
function ErrorRendererComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ErrorRendererComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ErrorRendererComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ErrorRendererComponent.propDecorators;
    /** @type {?} */
    ErrorRendererComponent.prototype.form;
    /** @type {?} */
    ErrorRendererComponent.prototype.validationFactory;
    /** @type {?} */
    ErrorRendererComponent.prototype.formErrorsService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItcmVuZGVyZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiZm9ybS1lbnRyeS9lcnJvci1yZW5kZXJlci9lcnJvci1yZW5kZXJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQVUsS0FBSyxFQUMzQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFpQnBFLE1BQU07Ozs7O0lBSUosWUFBb0IsaUJBQW9DLEVBQVUsaUJBQW9DO1FBQWxGLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0tBQUk7Ozs7SUFFMUcsUUFBUTtLQUNQOzs7O0lBRUQsVUFBVTtRQUNSLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ2pEOzs7O0lBRUQsSUFBSSxVQUFVO1FBRVosdUJBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUUsTUFBTSxDQUFDLGVBQWUsQ0FBQztLQUN4Qjs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBYztRQUMxQix1QkFBTSxNQUFNLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFeEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUVULE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0Q7UUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDO0tBQ2I7Ozs7O0lBRUQsa0JBQWtCLENBQUMsU0FBbUI7UUFFcEMsdUJBQU0sS0FBSyxHQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUgsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFjLEVBQUUsRUFBRTtZQUVsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyx1QkFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyRjtTQUNGLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELFlBQVksQ0FBQyxJQUFjO1FBQ3hCLHVCQUFNLGFBQWEscUJBQWtCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQXlCLENBQUEsQ0FBQztRQUNsRixNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3hEOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7OztDQVViO2dCQUNHLE1BQU0sRUFBRSxDQUFDLDRJQUE0SSxDQUFDO2FBQ3pKOzs7O1lBbkJRLGlCQUFpQjtZQUdqQixpQkFBaUI7OztxQkFtQnZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LCBPbkluaXQsIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuLi9mb3JtLWZhY3RvcnkvZm9ybSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25GYWN0b3J5IH0gZnJvbSAnLi4vZm9ybS1mYWN0b3J5L3ZhbGlkYXRpb24uZmFjdG9yeSc7XHJcbmltcG9ydCB7IE5vZGVCYXNlLCBMZWFmTm9kZSB9IGZyb20gJy4uL2Zvcm0tZmFjdG9yeS9mb3JtLW5vZGUnO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkdyb3VwIH0gZnJvbSAnLi4vcXVlc3Rpb24tbW9kZWxzL2dyb3VwLXF1ZXN0aW9uJztcclxuaW1wb3J0IHsgRm9ybUVycm9yc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mb3JtLWVycm9ycy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdlcnJvci1yZW5kZXJlcicsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJzaG93RXJyb3JzKClcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG48dWwgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcbiAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nXCIgKm5nRm9yPVwibGV0IGVycm9yTm9kZSBvZiBlcnJvck5vZGVzXCIgKGNsaWNrKT1hbm5vdW5jZUVycm9yRmllbGQoZXJyb3JOb2RlKT5cclxuICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiICpuZ0lmPVwiZXJyb3JOb2RlLmNvbnRyb2wudmFsaWQgPT0gZmFsc2VcIj5cclxuICAgICAgPGg0Pnt7ZXJyb3JOb2RlLnF1ZXN0aW9uLmxhYmVsfX08L2g0PlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+IHt7Z2V0Q29udHJvbEVycm9yKGVycm9yTm9kZSl9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbGk+XHJcbjwvdWw+XHJcbjwvZGl2PlxyXG5gLFxyXG4gICAgc3R5bGVzOiBbYHVse2xpc3Qtc3R5bGU6bm9uZX0ubGlzdC1ncm91cC1pdGVte3BhZGRpbmc6MnB4IDE1cHg7Y3Vyc29yOnBvaW50ZXJ9dWwgbGk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfWg0e21hcmdpbi10b3A6N3B4O21hcmdpbi1ib3R0b206N3B4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFcnJvclJlbmRlcmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgZm9ybTogRm9ybTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uRmFjdG9yeTogVmFsaWRhdGlvbkZhY3RvcnksIHByaXZhdGUgZm9ybUVycm9yc1NlcnZpY2U6IEZvcm1FcnJvcnNTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHNob3dFcnJvcnMoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuZm9ybS52YWxpZCAmJiB0aGlzLmZvcm0uc2hvd0Vycm9ycztcclxuICB9XHJcblxyXG4gIGdldCBlcnJvck5vZGVzKCkge1xyXG5cclxuICAgIGNvbnN0IGludmFsaWRDb250cm9scyA9IHRoaXMuZm9ybS5tYXJrSW52YWxpZENvbnRyb2xzKHRoaXMuZm9ybS5yb290Tm9kZSwgW10pO1xyXG4gICAgcmV0dXJuIGludmFsaWRDb250cm9scztcclxuICB9XHJcblxyXG4gIGdldENvbnRyb2xFcnJvcihub2RlOiBMZWFmTm9kZSkge1xyXG4gICAgICBjb25zdCBlcnJvcnM6IGFueSA9IG5vZGUuY29udHJvbC5lcnJvcnM7XHJcblxyXG4gICAgICBpZiAoZXJyb3JzKSB7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbkZhY3RvcnkuZXJyb3JzKGVycm9ycywgbm9kZS5xdWVzdGlvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIGFubm91bmNlRXJyb3JGaWVsZChlcnJvck5vZGU6IExlYWZOb2RlKSB7XHJcblxyXG4gICAgY29uc3Qgbm9kZXM6IEFycmF5PE5vZGVCYXNlPiA9IHRoaXMuZm9ybS5zZWFyY2hOb2RlQnlRdWVzdGlvbklkKGVycm9yTm9kZS5wYXRoLnN1YnN0cmluZygwLCBlcnJvck5vZGUucGF0aC5pbmRleE9mKCcuJykpKTtcclxuXHJcbiAgICBfLmZvckVhY2gobm9kZXMsIChub2RlOiBOb2RlQmFzZSkgPT4ge1xyXG5cclxuICAgICAgaWYgKG5vZGUucXVlc3Rpb24ucmVuZGVyaW5nVHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZUluZGV4OiBudW1iZXIgPSB0aGlzLmdldFBhZ2VJbmRleChub2RlKTtcclxuICAgICAgICB0aGlzLmZvcm1FcnJvcnNTZXJ2aWNlLmFubm91bmNlRXJyb3JGaWVsZChwYWdlSW5kZXggKyAnLCcgKyBlcnJvck5vZGUucXVlc3Rpb24ua2V5KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQYWdlSW5kZXgobm9kZTogTm9kZUJhc2UpIHtcclxuICAgICBjb25zdCBxdWVzdGlvbkdyb3VwOiBRdWVzdGlvbkdyb3VwID0gdGhpcy5mb3JtLnJvb3ROb2RlLnF1ZXN0aW9uIGFzIFF1ZXN0aW9uR3JvdXA7XHJcbiAgICAgcmV0dXJuIHF1ZXN0aW9uR3JvdXAucXVlc3Rpb25zLmluZGV4T2Yobm9kZS5xdWVzdGlvbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==