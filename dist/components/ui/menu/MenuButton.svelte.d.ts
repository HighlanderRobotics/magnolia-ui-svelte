import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        /**
             * The visual appearance of the button.
             */ variant?: "primary" | "secondary" | "danger" | "text-only" | "text-only-secondary" | undefined;
        /**
             * The DOM element to render the button with.
             */ element?: "a" | "button" | undefined;
        /**
             * `href` attribute of an `<a>` tag. Used only for `element="a"`.
             */ href?: string | undefined;
        /**
             * `type` attribute of a `<button>` tag. Used only for `element="button"`.
             */ type?: 'button' | 'submit' | 'reset' | null | undefined;
        /**
             * Prevents the component from being interacted with.
             */ disabled?: boolean | undefined;
    };
    events: {
        click: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type MenuButtonProps = typeof __propDef.props;
export type MenuButtonEvents = typeof __propDef.events;
export type MenuButtonSlots = typeof __propDef.slots;
export default class MenuButton extends SvelteComponent<MenuButtonProps, MenuButtonEvents, MenuButtonSlots> {
}
export {};
