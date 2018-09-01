/**
 * @license
 * Positive Technologies All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ptsecurity/mosaic'), require('@angular/forms'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@ptsecurity/mosaic-examples', ['exports', '@angular/core', '@ptsecurity/mosaic', '@angular/forms', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['mosaic-examples'] = {}),global.ng.core,global.ng.mosaic,global.ng.forms,global.ng.common));
}(this, (function (exports,core,mosaic,forms,common) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var ExampleMosaicModule = /** @class */ (function () {
    function ExampleMosaicModule() {
    }
    ExampleMosaicModule = __decorate([
        core.NgModule({
            imports: [
                mosaic.McButtonModule
            ],
            exports: [
                mosaic.McButtonModule
            ]
        })
    ], ExampleMosaicModule);
    return ExampleMosaicModule;
}());

/**
 * @title Basic buttons
 */
var ButtonBasicExample = /** @class */ (function () {
    function ButtonBasicExample() {
    }
    ButtonBasicExample = __decorate([
        core.Component({
            selector: 'button-basic-example',
            template: "<button mc-button>Click me!</button>",
            styles: ["/** No CSS for this example */ "]
        })
    ], ButtonBasicExample);
    return ButtonBasicExample;
}());

var EXAMPLE_COMPONENTS = {
    'button-basic': {
        title: 'Basic buttons',
        component: ButtonBasicExample
    },
};
var EXAMPLE_LIST = [
    ButtonBasicExample,
];
var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    ExampleModule = __decorate([
        core.NgModule({
            declarations: EXAMPLE_LIST,
            entryComponents: EXAMPLE_LIST,
            imports: [
                ExampleMosaicModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                common.CommonModule
            ]
        })
    ], ExampleModule);
    return ExampleModule;
}());

// The example-module file will be auto-generated. As soon as the
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
var ExampleData = /** @class */ (function () {
    function ExampleData(example) {
        var _a;
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        var exampleConfig = EXAMPLE_COMPONENTS[example];
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map(function (extension) { return example + "-example." + extension; });
        this.examplePath = "/assets/stackblitz/examples/" + example + "/";
        this.selectorName = this.indexFilename = example + "-example";
        if (exampleConfig.additionalFiles) {
            (_a = this.exampleFiles).push.apply(_a, exampleConfig.additionalFiles);
        }
        var exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
        this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentName = exampleConfig.selectorName ||
            exampleName.replace(/[\-]+/g, '') + 'Example';
    }
    return ExampleData;
}());

exports.ɵa = ExampleMosaicModule;
exports.ExampleData = ExampleData;
exports.EXAMPLE_COMPONENTS = EXAMPLE_COMPONENTS;
exports.EXAMPLE_LIST = EXAMPLE_LIST;
exports.ExampleModule = ExampleModule;
exports.ButtonBasicExample = ButtonBasicExample;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mosaic-examples.umd.js.map
