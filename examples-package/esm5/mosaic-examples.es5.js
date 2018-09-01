/**
 * @license
 * Positive Technologies All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license.
 */
import { __decorate } from 'tslib';
import { NgModule, Component } from '@angular/core';
import { McButtonModule } from '@ptsecurity/mosaic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

var ExampleMosaicModule = /** @class */ (function () {
    function ExampleMosaicModule() {
    }
    ExampleMosaicModule = __decorate([
        NgModule({
            imports: [
                McButtonModule
            ],
            exports: [
                McButtonModule
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
        Component({
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
        NgModule({
            declarations: EXAMPLE_LIST,
            entryComponents: EXAMPLE_LIST,
            imports: [
                ExampleMosaicModule,
                FormsModule,
                ReactiveFormsModule,
                CommonModule
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

/**
 * Generated bundle index. Do not edit.
 */

export { ExampleMosaicModule as ɵa, ExampleData, EXAMPLE_COMPONENTS, EXAMPLE_LIST, ExampleModule, ButtonBasicExample };
//# sourceMappingURL=mosaic-examples.es5.js.map
