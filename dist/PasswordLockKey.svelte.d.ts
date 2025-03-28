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
 * @props:color2: any = '#134cca';
 * @props:color3: any = '#2563eb';
 * @props:color4: any = '#9ab7f6';
 * @props:color5: any = '#c8d8fa';
 * @props:color6: any = '#d6e2fb';
 * @props:ariaLabel: any = 'Password Lock Key';
 * @props:class: string = 'shrink-0 w-auto max-w-[16rem] h-40 text-gray-800 dark:text-white';
 * @props:height: any = '100';
 */
declare const PasswordLockKey: import("svelte").Component<Props, {}, "">;
type PasswordLockKey = ReturnType<typeof PasswordLockKey>;
export default PasswordLockKey;
