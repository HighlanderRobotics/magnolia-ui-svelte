import { SvelteComponent } from "svelte";
import type { HTMLInputTypeAttribute } from 'svelte/elements';
declare const __propDef: {
    props: {
        value?: string | undefined;
        placeholder?: string | undefined;
        errorMessage?: string | null | undefined;
        disabled?: boolean | undefined;
        ariaLabel?: string | null | undefined;
        type?: HTMLInputTypeAttribute | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        required?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TextFieldProps = typeof __propDef.props;
export type TextFieldEvents = typeof __propDef.events;
export type TextFieldSlots = typeof __propDef.slots;
export default class TextField extends SvelteComponent<TextFieldProps, TextFieldEvents, TextFieldSlots> {
}
export {};
