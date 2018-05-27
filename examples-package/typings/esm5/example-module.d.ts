import { ButtonBasicExample } from './button-basic/button-basic-example';
export interface LiveExample {
    title: string;
    component: any;
    additionalFiles?: string[];
    selectorName?: string;
}
export declare const EXAMPLE_COMPONENTS: {
    [key: string]: LiveExample;
};
export declare const EXAMPLE_LIST: (typeof ButtonBasicExample)[];
export declare class ExampleModule {
}
