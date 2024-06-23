import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type MagnoliaUiRootProps = typeof __propDef.props;
export type MagnoliaUiRootEvents = typeof __propDef.events;
export type MagnoliaUiRootSlots = typeof __propDef.slots;
export default class MagnoliaUiRoot extends SvelteComponent<MagnoliaUiRootProps, MagnoliaUiRootEvents, MagnoliaUiRootSlots> {
}
export {};
