/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class MaxValidator {
    /**
     * @param {?} max
     * @return {?}
     */
    validate(max) {
        return (control) => {
            if (control.hidden) {
                return null;
            }
            if (control.value && control.value.length !== 0) {
                const /** @type {?} */ v = control.value;
                return v <= max ? null : { 'max': { requiredValue: max, actualValue: v } };
            }
            return null;
        };
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubXJzLWZvcm1lbnRyeS8iLCJzb3VyY2VzIjpbImZvcm0tZW50cnkvdmFsaWRhdG9ycy9tYXgudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNOzs7OztJQUVKLFFBQVEsQ0FBQyxHQUFXO1FBRWxCLE1BQU0sQ0FBQyxDQUFDLE9BQXVCLEVBQTBCLEVBQUU7WUFFekQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDYjtZQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFaEQsdUJBQU0sQ0FBQyxHQUFXLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUM1RTtZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDYixDQUFDO0tBQ0g7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmZUZvcm1Db250cm9sIH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QtY29udHJvbHMtZXh0ZW5zaW9uL2FmZS1mb3JtLWNvbnRyb2wnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1heFZhbGlkYXRvciB7XHJcblxyXG4gIHZhbGlkYXRlKG1heDogbnVtYmVyKSB7XHJcblxyXG4gICAgcmV0dXJuIChjb250cm9sOiBBZmVGb3JtQ29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT4ge1xyXG5cclxuICAgICAgaWYgKGNvbnRyb2wuaGlkZGVuKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb250cm9sLnZhbHVlICYmIGNvbnRyb2wudmFsdWUubGVuZ3RoICE9PSAwKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHY6IG51bWJlciA9IGNvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHYgPD0gbWF4ID8gbnVsbCA6IHsgJ21heCc6IHsgcmVxdWlyZWRWYWx1ZTogbWF4LCBhY3R1YWxWYWx1ZTogdiB9IH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19