import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        items?: {
            label: string;
            value: string;
            disabled?: boolean | null | undefined;
        }[] | undefined;
        value?: string | null | undefined;
        placeholder?: string | null | undefined;
        disabled?: boolean | undefined;
        ariaLabel?: string | null | undefined;
        name?: string | null | undefined;
        id?: string | null | undefined;
        required?: boolean | undefined;
        errorMessage?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponent<SelectProps, SelectEvents, SelectSlots> {
}
export {};
