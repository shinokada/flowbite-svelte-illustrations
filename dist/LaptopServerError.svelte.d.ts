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
declare const LaptopServerError: import("svelte").Component<Props, {}, "">;
type LaptopServerError = ReturnType<typeof LaptopServerError>;
export default LaptopServerError;
