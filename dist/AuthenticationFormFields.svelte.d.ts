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
declare const AuthenticationFormFields: import("svelte").Component<Props, {}, "">;
type AuthenticationFormFields = ReturnType<typeof AuthenticationFormFields>;
export default AuthenticationFormFields;
