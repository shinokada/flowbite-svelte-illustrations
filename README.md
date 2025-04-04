# Flowbite Svelte Illustrations

[Docs](https://flowbite-svelte-illustrations.codewithshin.com/)

## Requirements

- Svelte 5
- tailwindCSS

## Installation

```sh
pnpm i -D flowbite-svelte-illustrations
```

## How to use

```svelte
<script lang="ts">
	import { A404NotFoundSmiley, A404NotFoundSmileyDark } from 'flowbite-svelte-illustrations';
</script>

<div class="dark:hidden">
	<A404NotFoundSmiley />
</div>
<div class="hidden dark:block">
	<A404NotFoundSmileyDark />
</div>
```

## Types

```ts
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
}
```

## Props

```md
- color1 = '#2563eb',
- color2 = '#9ab7f6',
- color3 = '#c8d8fa',
- color4 = '#d6e2fb',
  // more colors depends on illustration
- ariaLabel = <file name>,
- class: className = 'shrink-0 w-auto max-w-[16rem] h-40 text-gray-800 dark:text-white',
- height = '100',
- title,
- desc,
- ...restProps
```
