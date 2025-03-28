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
}
/**
 * [Go to docs](https://flowbite-svelte-illustrations.codewithshin.com/)
 * ## Props
 * @props: color1: any = '#111928';
 * @props:color2: any = '#2563eb';
 * @props:color3: any = '#9ab7f6';
 * @props:color4: any = '#F9FAFB';
 * @props:color5: any = '#c8d8fa';
 * @props:color6: any = '#d6e2fb';
 * @props:ariaLabel: any = 'Smartphone Charts';
 * @props:class: string = 'shrink-0 w-auto max-w-[16rem] h-40 text-gray-800 dark:text-white';
 * @props:height: any = '100';
 */
declare const SmartphoneCharts: import("svelte").Component<Props, {}, "">;
type SmartphoneCharts = ReturnType<typeof SmartphoneCharts>;
export default SmartphoneCharts;
