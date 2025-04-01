import type { TitleType, DescType } from './types';
import type { SVGAttributes } from 'svelte/elements';
interface Props extends SVGAttributes<SVGElement> {
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
    color5?: string;
    color6?: string;
    color7?: string;
    color8?: string;
    color9?: string;
    color10?: string;
    color11?: string;
    color12?: string;
    color13?: string;
    ariaLabel?: string;
    class?: string;
    height?: string;
    title?: TitleType;
    desc?: DescType;
}
declare const ManPointingSmartphone: import("svelte").Component<Props, {}, "">;
type ManPointingSmartphone = ReturnType<typeof ManPointingSmartphone>;
export default ManPointingSmartphone;
