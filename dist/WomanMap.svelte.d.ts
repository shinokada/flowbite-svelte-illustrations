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
    ariaLabel?: string;
    class?: string;
    height?: string;
    title?: TitleType;
    desc?: DescType;
}
/**
 * [Go to docs](https://flowbite-svelte-illustrations.codewithshin.com/)
 * ## Props
 * @props: color1: any = '#111928';
 * @props:color2: any = '#2563eb';
 * @props:color3: any = '#374151';
 * @props:color4: any = '#7F270F';
 * @props:color5: any = '#9ab7f6';
 * @props:color6: any = '#B1D2FE';
 * @props:color7: any = '#DBEBFE';
 * @props:color8: any = '#F9FAFB';
 * @props:color9: any = '#FDBA8C';
 * @props:color10: any = '#c8d8fa';
 * @props:color11: any = '#d6e2fb';
 * @props:ariaLabel: any = 'Woman Map';
 * @props:class: string = 'shrink-0 w-auto max-w-[16rem] text-gray-800 dark:text-white';
 * @props:height: any = '100';
 * @props:title: any;
 * @props:desc: any;
 */
declare const WomanMap: import("svelte").Component<Props, {}, "">;
type WomanMap = ReturnType<typeof WomanMap>;
export default WomanMap;
