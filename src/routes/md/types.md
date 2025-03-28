export type TitleType = {
  id?: string;
  title?: string;
};

export type DescType = {
  id?: string;
  desc?: string;
};

import type { SVGAttributes } from 'svelte/elements';
interface Props extends SVGAttributes<SVGElement> {
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  // more colors depends on illustration
  ariaLabel?: string;
  class?: string;
  height?: string;
  title?: TitleType;
  desc?: DescType;
};
