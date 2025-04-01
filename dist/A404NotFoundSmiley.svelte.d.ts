import type { TitleType, DescType } from './types';
import type { SVGAttributes } from 'svelte/elements';
interface Props extends SVGAttributes<SVGElement> {
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
    ariaLabel?: string;
    class?: string;
    height?: string;
    title?: TitleType;
    desc?: DescType;
}
declare const A404NotFoundSmiley: import("svelte").Component<Props, {}, "">;
type A404NotFoundSmiley = ReturnType<typeof A404NotFoundSmiley>;
export default A404NotFoundSmiley;
