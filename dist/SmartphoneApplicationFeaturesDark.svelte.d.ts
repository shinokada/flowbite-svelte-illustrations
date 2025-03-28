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
    ariaLabel?: string;
    class?: string;
    height?: string;
    title?: TitleType;
    desc?: DescType;
}
/**
 * [Go to docs](https://flowbite-svelte-illustrations.codewithshin.com/)
 * ## Props
 * @props: color1: any = '#1D2735';
 * @props:color2: any = '#1F2A37';
 * @props:color3: any = '#9ab7f6';
 * @props:color4: any = '#E8D4C3';
 * @props:color5: any = '#F2E0CF';
 * @props:color6: any = '#F9FAFB';
 * @props:color7: any = '#c8d8fa';
 * @props:color8: any = '#d6e2fb';
 * @props:ariaLabel: any = 'Smartphone Application Features Dark';
 * @props:class: string = 'shrink-0 w-auto max-w-[16rem] text-gray-800 dark:text-white';
 * @props:height: any = '100';
 * @props:title: any;
 * @props:desc: any;
 */
declare const SmartphoneApplicationFeaturesDark: import("svelte").Component<Props, {}, "">;
type SmartphoneApplicationFeaturesDark = ReturnType<typeof SmartphoneApplicationFeaturesDark>;
export default SmartphoneApplicationFeaturesDark;
