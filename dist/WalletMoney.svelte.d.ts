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
 * @props:color2: any = '#2369F3';
 * @props:color3: any = '#2563eb';
 * @props:color4: any = '#9ab7f6';
 * @props:color5: any = '#B7D6FE';
 * @props:color6: any = '#c8d8fa';
 * @props:color7: any = '#d6e2fb';
 * @props:ariaLabel: any = 'Wallet Money';
 * @props:class: string = 'shrink-0 w-auto max-w-[16rem] text-gray-800 dark:text-white';
 * @props:height: any = '100';
 * @props:title: any;
 * @props:desc: any;
 */
declare const WalletMoney: import("svelte").Component<Props, {}, "">;
type WalletMoney = ReturnType<typeof WalletMoney>;
export default WalletMoney;
