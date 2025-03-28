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
}
/**
 * [Go to docs](https://flowbite-svelte-illustrations.codewithshin.com/)
 * ## Props
 * @props: color1: any = '#111928';
 * @props:color2: any = '#1B2533';
 * @props:color3: any = '#1C2634';
 * @props:color4: any = '#1F2A37';
 * @props:color5: any = '#2563eb';
 * @props:color6: any = '#374151';
 * @props:color7: any = '#6B7280';
 * @props:color8: any = '#c8d8fa';
 * @props:ariaLabel: any = 'Authentication Form Fields Dark';
 * @props:class: string = 'shrink-0 w-auto max-w-[16rem] h-40 text-gray-800 dark:text-white';
 * @props:height: any = '100';
 */
declare const AuthenticationFormFieldsDark: import("svelte").Component<Props, {}, "">;
type AuthenticationFormFieldsDark = ReturnType<typeof AuthenticationFormFieldsDark>;
export default AuthenticationFormFieldsDark;
