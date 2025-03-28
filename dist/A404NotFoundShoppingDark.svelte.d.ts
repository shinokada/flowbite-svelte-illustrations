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
/**
 * [Go to docs](https://flowbite-svelte-illustrations.codewithshin.com/)
 * ## Props
 * @props: color1: any = '#1F2A37';
 * @props:color2: any = '#2563eb';
 * @props:color3: any = '#374151';
 * @props:color4: any = '#6B7280';
 * @props:color5: any = '#c8d8fa';
 * @props:color6: any = '#d6e2fb';
 * @props:ariaLabel: any = '404 Not Found Shopping Dark';
 * @props:class: string = 'shrink-0 w-auto max-w-[16rem] text-gray-800 dark:text-white';
 * @props:height: any = '100';
 * @props:title: any;
 * @props:desc: any;
 */
declare const A404NotFoundShoppingDark: import("svelte").Component<Props, {}, "">;
type A404NotFoundShoppingDark = ReturnType<typeof A404NotFoundShoppingDark>;
export default A404NotFoundShoppingDark;
