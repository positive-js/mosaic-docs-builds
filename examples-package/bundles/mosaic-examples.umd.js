/**
 * @license
 * Positive Technologies All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ptsecurity/mosaic'), require('@angular/forms'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@ptsecurity/mosaic-examples', ['exports', '@angular/core', '@ptsecurity/mosaic', '@angular/forms', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.mosaicExamples = {}),global.ng.core,global.ng.mosaic,global.ng.forms,global.ng.common));
}(this, (function (exports,core,mosaic,forms,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExampleMosaicModule = /** @class */ (function () {
    function ExampleMosaicModule() {
    }
    ExampleMosaicModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        mosaic.McButtonModule
                    ],
                    exports: [
                        mosaic.McButtonModule
                    ]
                },] },
    ];
    return ExampleMosaicModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic buttons
 */
var ButtonBasicExample = /** @class */ (function () {
    function ButtonBasicExample() {
    }
    ButtonBasicExample.decorators = [
        { type: core.Component, args: [{
                    selector: 'button-basic-example',
                    template: "<button mc-button>Click me!</button>",
                    styles: ["/** No CSS for this example */ "]
                },] },
    ];
    return ButtonBasicExample;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EXAMPLE_COMPONENTS = {
    'button-basic': {
        title: 'Basic buttons',
        component: ButtonBasicExample
    },
};
/** @type {?} */
var EXAMPLE_LIST = [
    ButtonBasicExample,
];
var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    ExampleModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: EXAMPLE_LIST,
                    entryComponents: EXAMPLE_LIST,
                    imports: [
                        ExampleMosaicModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        common.CommonModule
                    ]
                },] },
    ];
    return ExampleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
var   /**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
ExampleData = /** @class */ (function () {
    function ExampleData(example) {
        var _a;
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        /** @type {?} */
        var exampleConfig = EXAMPLE_COMPONENTS[example];
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map((/**
         * @param {?} extension
         * @return {?}
         */
        function (extension) { return example + "-example." + extension; }));
        this.examplePath = "/assets/stackblitz/examples/" + example + "/";
        this.selectorName = this.indexFilename = example + "-example";
        if (exampleConfig.additionalFiles) {
            (_a = this.exampleFiles).push.apply(_a, exampleConfig.additionalFiles);
        }
        /** @type {?} */
        var exampleName = example.replace(/(?:^\w|\b\w)/g, (/**
         * @param {?} letter
         * @return {?}
         */
        function (letter) { return letter.toUpperCase(); }));
        this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentName = exampleConfig.selectorName ||
            exampleName.replace(/[\-]+/g, '') + 'Example';
    }
    return ExampleData;
}());

exports.ExampleData = ExampleData;
exports.EXAMPLE_COMPONENTS = EXAMPLE_COMPONENTS;
exports.EXAMPLE_LIST = EXAMPLE_LIST;
exports.ExampleModule = ExampleModule;
exports.ButtonBasicExample = ButtonBasicExample;
exports.ɵa = ExampleMosaicModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mosaic-examples.umd.js.map
