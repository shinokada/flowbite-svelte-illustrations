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
 * @props: color1: any = '#111928';
 * @props:color2: any = '#1F2A37';
 * @props:color3: any = '#2F3948';
 * @props:color4: any = '#374151';
 * @props:color5: any = '#6B7280';
 * @props:color6: any = '#9ab7f6';
 * @props:color7: any = '#F9FAFB';
 * @props:color8: any = '#c8d8fa';
 * @props:ariaLabel: any = 'Password Lock Key Dark';
 * @props:class: string = 'shrink-0 w-auto max-w-[16rem] text-gray-800 dark:text-white';
 * @props:height: any = '100';
 * @props:title: any;
 * @props:desc: any;
 */
declare const PasswordLockKeyDark: import("svelte").Component<Props, {}, "">;
type PasswordLockKeyDark = ReturnType<typeof PasswordLockKeyDark>;
export default PasswordLockKeyDark;
