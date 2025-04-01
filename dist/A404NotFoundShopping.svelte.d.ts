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
declare const A404NotFoundShopping: import("svelte").Component<Props, {}, "">;
type A404NotFoundShopping = ReturnType<typeof A404NotFoundShopping>;
export default A404NotFoundShopping;
