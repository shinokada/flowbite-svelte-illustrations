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
 * @props: color1: any = '#9ab7f6';
 * @props:color2: any = '#E8D4C3';
 * @props:color3: any = '#F2E0CF';
 * @props:color4: any = '#F9FAFB';
 * @props:color5: any = '#c8d8fa';
 * @props:color6: any = '#d6e2fb';
 * @props:ariaLabel: any = 'Smartphone Application Features';
 * @props:class: string = 'shrink-0 w-auto max-w-[16rem] h-40 text-gray-800 dark:text-white';
 * @props:height: any = '100';
 */
declare const SmartphoneApplicationFeatures: import("svelte").Component<Props, {}, "">;
type SmartphoneApplicationFeatures = ReturnType<typeof SmartphoneApplicationFeatures>;
export default SmartphoneApplicationFeatures;
