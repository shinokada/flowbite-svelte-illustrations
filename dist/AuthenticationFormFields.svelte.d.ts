import type { TitleType, DescType } from './types';
import type { SVGAttributes } from 'svelte/elements';
interface Props extends SVGAttributes<SVGElement> {
    color1?: string;
    color2?: string;
    color3?: string;
    ariaLabel?: string;
    class?: string;
    height?: string;
    title?: TitleType;
    desc?: DescType;
}
/**
 * [Go to docs](https://flowbite-svelte-illustrations.codewithshin.com/)
 * ## Props
 * @props: color1: any = '#2563eb';
 * @props:color2: any = '#c8d8fa';
 * @props:color3: any = '#d6e2fb';
 * @props:ariaLabel: any = 'Authentication Form Fields';
 * @props:class: string = 'shrink-0 w-auto max-w-[16rem] text-gray-800 dark:text-white';
 * @props:height: any = '100';
 * @props:title: any;
 * @props:desc: any;
 */
declare const AuthenticationFormFields: import("svelte").Component<Props, {}, "">;
type AuthenticationFormFields = ReturnType<typeof AuthenticationFormFields>;
export default AuthenticationFormFields;
