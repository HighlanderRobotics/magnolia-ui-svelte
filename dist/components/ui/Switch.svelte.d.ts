import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        /**
             * `true` if turned on, `false` if turned off.
             *
             * Use `bind:value` to control and read the value.
             */ value?: boolean | undefined;
        /**
             * Disables interaction.
             */ disabled?: boolean | undefined;
        /**
             * Localized accessibility label for screen readers.
             */ ariaLabel?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SwitchProps = typeof __propDef.props;
export type SwitchEvents = typeof __propDef.events;
export type SwitchSlots = typeof __propDef.slots;
export default class Switch extends SvelteComponent<SwitchProps, SwitchEvents, SwitchSlots> {
}
export {};
