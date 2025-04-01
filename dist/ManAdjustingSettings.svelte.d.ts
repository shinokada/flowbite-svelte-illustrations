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
    ariaLabel?: string;
    class?: string;
    height?: string;
    title?: TitleType;
    desc?: DescType;
}
declare const ManAdjustingSettings: import("svelte").Component<Props, {}, "">;
type ManAdjustingSettings = ReturnType<typeof ManAdjustingSettings>;
export default ManAdjustingSettings;
