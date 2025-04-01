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
    ariaLabel?: string;
    class?: string;
    height?: string;
    title?: TitleType;
    desc?: DescType;
}
declare const ManAdjustingSettingsDark: import("svelte").Component<Props, {}, "">;
type ManAdjustingSettingsDark = ReturnType<typeof ManAdjustingSettingsDark>;
export default ManAdjustingSettingsDark;
