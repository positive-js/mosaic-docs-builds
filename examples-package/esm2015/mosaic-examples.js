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

let ExampleMosaicModule = class ExampleMosaicModule {
};
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

/**
 * @title Basic buttons
 */
let ButtonBasicExample = class ButtonBasicExample {
};
ButtonBasicExample = __decorate([
    Component({
        selector: 'button-basic-example',
        template: "<button mc-button>Click me!</button>",
        styles: ["/** No CSS for this example */ "]
    })
], ButtonBasicExample);

const EXAMPLE_COMPONENTS = {
    'button-basic': {
        title: 'Basic buttons',
        component: ButtonBasicExample
    },
};
const EXAMPLE_LIST = [
    ButtonBasicExample,
];
let ExampleModule = class ExampleModule {
};
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

// The example-module file will be auto-generated. As soon as the
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
class ExampleData {
    constructor(example) {
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        const exampleConfig = EXAMPLE_COMPONENTS[example];
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map(extension => `${example}-example.${extension}`);
        this.examplePath = `/assets/stackblitz/examples/${example}/`;
        this.selectorName = this.indexFilename = `${example}-example`;
        if (exampleConfig.additionalFiles) {
            this.exampleFiles.push(...exampleConfig.additionalFiles);
        }
        const exampleName = example.replace(/(?:^\w|\b\w)/g, letter => letter.toUpperCase());
        this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentName = exampleConfig.selectorName ||
            exampleName.replace(/[\-]+/g, '') + 'Example';
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { ExampleMosaicModule as ɵa, ExampleData, EXAMPLE_COMPONENTS, EXAMPLE_LIST, ExampleModule, ButtonBasicExample };
//# sourceMappingURL=mosaic-examples.js.map
