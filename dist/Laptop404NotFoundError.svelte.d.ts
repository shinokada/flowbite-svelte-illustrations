import type { TitleType, DescType } from './types';
import type { SVGAttributes } from 'svelte/elements';
interface Props extends SVGAttributes<SVGElement> {
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
    color5?: string;
    ariaLabel?: string;
    class?: string;
    height?: string;
    title?: TitleType;
    desc?: DescType;
}
/**
 * [Go to docs](https://flowbite-svelte-illustrations.codewithshin.com/)
 * ## Props
 * @props: color1: any = '#1555e2';
 * @props:color2: any = '#2563eb';
 * @props:color3: any = '#9ab7f6';
 * @props:color4: any = '#c8d8fa';
 * @props:color5: any = '#d6e2fb';
 * @props:ariaLabel: any = 'Laptop 404 Not Found Error';
 * @props:class: string = 'shrink-0 w-auto max-w-[16rem] text-gray-800 dark:text-white';
 * @props:height: any = '100';
 * @props:title: any;
 * @props:desc: any;
 */
declare const Laptop404NotFoundError: import("svelte").Component<Props, {}, "">;
type Laptop404NotFoundError = ReturnType<typeof Laptop404NotFoundError>;
export default Laptop404NotFoundError;
