import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        open?: boolean | undefined;
        anchor?: "left" | "right" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type MenuProps = typeof __propDef.props;
export type MenuEvents = typeof __propDef.events;
export type MenuSlots = typeof __propDef.slots;
export default class Menu extends SvelteComponent<MenuProps, MenuEvents, MenuSlots> {
}
export {};
