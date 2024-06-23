import { SvelteComponent } from "svelte";
import type { MaterialSymbols } from 'material-design-icons-literal-types';
declare const __propDef: {
    props: {
        /**
             * Material Symbols icon name.
             *
             * [Browse icons](https://fonts.google.com/icons?icon.style=Rounded&icon.set=Material+Symbols)
             */ icon: MaterialSymbols;
        /**
             * The size of the icon, in pixels.
             */ size?: number | undefined;
        /**
             * Whether the icon should be drawn outlined or filled.
             */ filled?: boolean | undefined;
        /**
             * Duration, in seconds, of an animation changing the style of the icon.
             */ transitionDuration?: number | undefined;
        /**
             * CSS-parseable color of the icon.
             */ color?: string | undefined;
        /**
             * Visual emphasis of the icon.
             *
             * Default `0`, min `-200`, max `200`.
             */ grade?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IconProps = typeof __propDef.props;
export type IconEvents = typeof __propDef.events;
export type IconSlots = typeof __propDef.slots;
export default class Icon extends SvelteComponent<IconProps, IconEvents, IconSlots> {
}
export {};
