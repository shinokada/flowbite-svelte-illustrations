import type { SVGAttributes } from 'svelte/elements';
interface Props extends SVGAttributes<SVGElement> {
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
    ariaLabel?: string;
    class?: string;
    height?: string;
}
/**
 * [Go to docs](https://flowbite-svelte-illustrations.codewithshin.com/)
 * ## Props
 * @props: color1: any = '#2563eb';
 * @props:color2: any = '#9ab7f6';
 * @props:color3: any = '#c8d8fa';
 * @props:color4: any = '#d6e2fb';
 * @props:ariaLabel: any = 'Laptop Server Error';
 * @props:class: string = 'shrink-0 w-auto max-w-[16rem] h-40 text-gray-800 dark:text-white';
 * @props:height: any = '100';
 */
declare const LaptopServerError: import("svelte").Component<Props, {}, "">;
type LaptopServerError = ReturnType<typeof LaptopServerError>;
export default LaptopServerError;
