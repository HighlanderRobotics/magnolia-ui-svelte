import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        density: 'spacious' | 'compact';
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DensityProviderProps = typeof __propDef.props;
export type DensityProviderEvents = typeof __propDef.events;
export type DensityProviderSlots = typeof __propDef.slots;
export default class DensityProvider extends SvelteComponent<DensityProviderProps, DensityProviderEvents, DensityProviderSlots> {
}
export {};
