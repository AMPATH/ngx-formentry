/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ExpressionRunner } from '../expression-runner/expression-runner';
import { JsExpressionHelper } from '../helpers/js-expression-helper';
import { Validations } from './validations';
export class JsExpressionValidator {
    constructor() { }
    /**
     * @param {?} model
     * @param {?=} form
     * @return {?}
     */
    validate(model, form) {
        // convert helper functions to string
        return (control) => {
            if (!Validations.JSExpressionValidatorsEnabled) {
                return null;
            }
            const /** @type {?} */ expression = model.failsWhenExpression;
            const /** @type {?} */ helper = new JsExpressionHelper();
            const /** @type {?} */ dataDependencies = {};
            const /** @type {?} */ helperFunctions = helper.helperFunctions;
            const /** @type {?} */ runnable = new ExpressionRunner().getRunnable(expression, control, helperFunctions, dataDependencies, form);
            if (runnable.run()) {
                return { 'js_expression': { 'expression': expression, message: model.message } };
            }
            return null;
        };
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMtZXhwcmVzc2lvbi52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3Blbm1ycy1mb3JtZW50cnkvIiwic291cmNlcyI6WyJmb3JtLWVudHJ5L3ZhbGlkYXRvcnMvanMtZXhwcmVzc2lvbi52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsTUFBTTtJQUVKLGlCQUFnQjs7Ozs7O0lBRWhCLFFBQVEsQ0FBQyxLQUFrQyxFQUFFLElBQVU7O1FBR3JELE1BQU0sQ0FBQyxDQUFDLE9BQXVCLEVBQTBCLEVBQUU7WUFFekQsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ2I7WUFFRCx1QkFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLHVCQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7WUFDeEMsdUJBQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBRTVCLHVCQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1lBQy9DLHVCQUFNLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBRWxILEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRW5CLE1BQU0sQ0FBQyxFQUFFLGVBQWUsRUFBRSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2FBQ25GO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNiLENBQUM7S0FDSDtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZlRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi9hYnN0cmFjdC1jb250cm9scy1leHRlbnNpb24vYWZlLWZvcm0tY29udHJvbCc7XHJcbmltcG9ydCB7IEV4cHJlc3Npb25SdW5uZXIgfSBmcm9tICcuLi9leHByZXNzaW9uLXJ1bm5lci9leHByZXNzaW9uLXJ1bm5lcic7XHJcbmltcG9ydCB7IEpzRXhwcmVzc2lvbkhlbHBlciB9IGZyb20gJy4uL2hlbHBlcnMvanMtZXhwcmVzc2lvbi1oZWxwZXInO1xyXG5pbXBvcnQgeyBKc0V4cHJlc3Npb25WYWxpZGF0aW9uTW9kZWwgfSBmcm9tICcuLi9xdWVzdGlvbi1tb2RlbHMvanMtZXhwcmVzc2lvbi12YWxpZGF0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbnMgfSBmcm9tICcuL3ZhbGlkYXRpb25zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBKc0V4cHJlc3Npb25WYWxpZGF0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHZhbGlkYXRlKG1vZGVsOiBKc0V4cHJlc3Npb25WYWxpZGF0aW9uTW9kZWwsIGZvcm0/OiBhbnkpIHtcclxuXHJcbiAgICAvLyBjb252ZXJ0IGhlbHBlciBmdW5jdGlvbnMgdG8gc3RyaW5nXHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFmZUZvcm1Db250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XHJcblxyXG4gICAgICBpZiAoIVZhbGlkYXRpb25zLkpTRXhwcmVzc2lvblZhbGlkYXRvcnNFbmFibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBtb2RlbC5mYWlsc1doZW5FeHByZXNzaW9uO1xyXG4gICAgICBjb25zdCBoZWxwZXIgPSBuZXcgSnNFeHByZXNzaW9uSGVscGVyKCk7XHJcbiAgICAgIGNvbnN0IGRhdGFEZXBlbmRlbmNpZXMgPSB7fTtcclxuXHJcbiAgICAgIGNvbnN0IGhlbHBlckZ1bmN0aW9ucyA9IGhlbHBlci5oZWxwZXJGdW5jdGlvbnM7XHJcbiAgICAgIGNvbnN0IHJ1bm5hYmxlID0gbmV3IEV4cHJlc3Npb25SdW5uZXIoKS5nZXRSdW5uYWJsZShleHByZXNzaW9uLCBjb250cm9sLCBoZWxwZXJGdW5jdGlvbnMsIGRhdGFEZXBlbmRlbmNpZXMsIGZvcm0pO1xyXG5cclxuICAgICAgaWYgKHJ1bm5hYmxlLnJ1bigpKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7ICdqc19leHByZXNzaW9uJzogeyAnZXhwcmVzc2lvbic6IGV4cHJlc3Npb24sIG1lc3NhZ2U6ICBtb2RlbC5tZXNzYWdlIH0gfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=