import type { TitleType, DescType } from './types';
import type { SVGAttributes } from 'svelte/elements';
interface Props extends SVGAttributes<SVGElement> {
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
    color5?: string;
    color6?: string;
    ariaLabel?: string;
    class?: string;
    height?: string;
    title?: TitleType;
    desc?: DescType;
}
declare const SmartphoneApplicationFeatures: import("svelte").Component<Props, {}, "">;
type SmartphoneApplicationFeatures = ReturnType<typeof SmartphoneApplicationFeatures>;
export default SmartphoneApplicationFeatures;
