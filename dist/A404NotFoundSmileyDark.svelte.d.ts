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
 * @props: color1: any = '#111928';
 * @props:color2: any = '#1F2A37';
 * @props:color3: any = '#2563eb';
 * @props:color4: any = '#c8d8fa';
 * @props:ariaLabel: any = '404 Not Found Smiley Dark';
 * @props:class: string = 'shrink-0 w-auto max-w-[16rem] h-40 text-gray-800 dark:text-white';
 * @props:height: any = '100';
 */
declare const A404NotFoundSmileyDark: import("svelte").Component<Props, {}, "">;
type A404NotFoundSmileyDark = ReturnType<typeof A404NotFoundSmileyDark>;
export default A404NotFoundSmileyDark;
