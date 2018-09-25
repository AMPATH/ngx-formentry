/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { QuestionBase } from './question-base';
import { AfeControlType } from '../../abstract-controls-extension/afe-control-type';
var TestOrderQuestion = /** @class */ (function (_super) {
    tslib_1.__extends(TestOrderQuestion, _super);
    function TestOrderQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.renderingType = 'select';
        _this.orderType = options.orderType;
        _this.selectableOrders = options.selectableOrders;
        _this.options = options.options;
        _this.orderSettingUuid = options.orderSettingUuid;
        _this.rendering = options.orderSettingUuid;
        _this.controlType = AfeControlType.AfeFormControl;
        return _this;
    }
    return TestOrderQuestion;
}(QuestionBase));
export { TestOrderQuestion };
function TestOrderQuestion_tsickle_Closure_declarations() {
    /** @type {?} */
    TestOrderQuestion.prototype.orderType;
    /** @type {?} */
    TestOrderQuestion.prototype.selectableOrders;
    /** @type {?} */
    TestOrderQuestion.prototype.orderSettingUuid;
    /** @type {?} */
    TestOrderQuestion.prototype.rendering;
    /** @type {?} */
    TestOrderQuestion.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1vcmRlci1xdWVzdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubXJzLWZvcm1lbnRyeS8iLCJzb3VyY2VzIjpbImZvcm0tZW50cnkvcXVlc3Rpb24tbW9kZWxzL3Rlc3Qtb3JkZXItcXVlc3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXBGLElBQUE7SUFBdUMsNkNBQVk7SUFNL0MsMkJBQVksT0FBaUM7UUFBN0MsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FRakI7UUFQRyxLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUM5QixLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDL0IsS0FBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUMxQyxLQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUM7O0tBQ3BEOzRCQW5CTDtFQUl1QyxZQUFZLEVBZ0JsRCxDQUFBO0FBaEJELDZCQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXN0aW9uQmFzZSB9IGZyb20gJy4vcXVlc3Rpb24tYmFzZSc7XHJcbmltcG9ydCB7IFRlc3RPcmRlclF1ZXN0aW9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlcy90ZXN0LW9yZGVyLXF1ZXN0aW9uLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBBZmVDb250cm9sVHlwZSB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LWNvbnRyb2xzLWV4dGVuc2lvbi9hZmUtY29udHJvbC10eXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0T3JkZXJRdWVzdGlvbiBleHRlbmRzIFF1ZXN0aW9uQmFzZSB7XHJcbiAgICBvcmRlclR5cGU6IHN0cmluZztcclxuICAgIHNlbGVjdGFibGVPcmRlcnM6IHsgY29uY2VwdDogc3RyaW5nLCBsYWJlbDogc3RyaW5nIH1bXTtcclxuICAgIG9yZGVyU2V0dGluZ1V1aWQ6IHN0cmluZztcclxuICAgIHJlbmRlcmluZzogc3RyaW5nO1xyXG4gICAgb3B0aW9uczogYW55W107XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBUZXN0T3JkZXJRdWVzdGlvbk9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmluZ1R5cGUgPSAnc2VsZWN0JztcclxuICAgICAgICB0aGlzLm9yZGVyVHlwZSA9IG9wdGlvbnMub3JkZXJUeXBlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0YWJsZU9yZGVycyA9IG9wdGlvbnMuc2VsZWN0YWJsZU9yZGVycztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zLm9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5vcmRlclNldHRpbmdVdWlkID0gb3B0aW9ucy5vcmRlclNldHRpbmdVdWlkO1xyXG4gICAgICAgIHRoaXMucmVuZGVyaW5nID0gb3B0aW9ucy5vcmRlclNldHRpbmdVdWlkO1xyXG4gICAgICAgIHRoaXMuY29udHJvbFR5cGUgPSBBZmVDb250cm9sVHlwZS5BZmVGb3JtQ29udHJvbDtcclxuICAgIH1cclxufVxyXG4iXX0=