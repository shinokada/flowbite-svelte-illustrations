import type { SVGAttributes } from 'svelte/elements';
interface Props extends SVGAttributes<SVGElement> {
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
    color5?: string;
    color6?: string;
    color7?: string;
    ariaLabel?: string;
    class?: string;
    height?: string;
}
/**
 * [Go to docs](https://flowbite-svelte-illustrations.codewithshin.com/)
 * ## Props
 * @props: color1: any = '#111928';
 * @props:color2: any = '#1555e2';
 * @props:color3: any = '#2563eb';
 * @props:color4: any = '#374151';
 * @props:color5: any = '#9ab7f6';
 * @props:color6: any = '#c8d8fa';
 * @props:color7: any = '#d6e2fb';
 * @props:ariaLabel: any = 'Laptop 404 Not Found Error Dark';
 * @props:class: string = 'shrink-0 w-auto max-w-[16rem] h-40 text-gray-800 dark:text-white';
 * @props:height: any = '100';
 */
declare const Laptop404NotFoundErrorDark: import("svelte").Component<Props, {}, "">;
type Laptop404NotFoundErrorDark = ReturnType<typeof Laptop404NotFoundErrorDark>;
export default Laptop404NotFoundErrorDark;
