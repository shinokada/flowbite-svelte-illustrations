<script lang="ts">
	import type { TitleType, DescType } from './types';
	import type { SVGAttributes } from 'svelte/elements';
	interface Props extends SVGAttributes<SVGElement> {
		color1?: string;
		color2?: string;
		color3?: string;
		color4?: string;
		color5?: string;
		ariaLabel?: string;
		class?: string;
		height?: string;
		title?: TitleType;
		desc?: DescType;
	}

	let {
		color1 = '#111928',
		color2 = '#2563eb',
		color3 = '#9ab7f6',
		color4 = '#c8d8fa',
		color5 = '#d6e2fb',
		ariaLabel = 'Document Folders',
		class: className = 'shrink-0 w-auto max-w-[16rem] text-gray-800 dark:text-white',
		height = '100',
		title,
		desc,
		...restProps
	}: Props = $props();
	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	class={className}
	aria-hidden="true"
	width="600"
	height="548"
	viewBox="0 0 600 548"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	style={`height: ${height}`}
	aria-label={ariaLabel}
	aria-describedby={hasDescription ? ariaDescribedby : undefined}
	{...restProps}
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M572 274C572 425.326 449.326 548 298 548C146.674 548 24 425.326 24 274C24 122.674 146.674 0 298 0C449.326 0 572 122.674 572 274Z"
		fill={color5}
	/>
	<path
		d="M572 274C572 425.326 449.326 548 298 548C146.674 548 24 425.326 24 274C24 122.674 146.674 0 298 0C449.326 0 572 122.674 572 274Z"
		fill="url(#paint0_linear_411_1556)"
	/>
	<path
		d="M502 390H435.5C468.7 326.8 559 273.333 600 254.5C574.4 317.3 524 371 502 390Z"
		fill={color4}
	/>
	<path
		d="M445.5 390H379C412.2 326.8 509 190.5 562 147.5C544.5 231 467.5 371 445.5 390Z"
		fill={color4}
	/>
	<path d="M98 390H164.5C131.3 326.8 41 273.333 0 254.5C25.6 317.3 76 371 98 390Z" fill={color4} />
	<path
		d="M154.5 390H221C187.8 326.8 91 190.5 38 147.5C55.5 231 132.5 371 154.5 390Z"
		fill={color4}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M546.773 389C503.303 482.878 408.257 548 298.002 548C187.746 548 92.7004 482.878 49.2305 389H546.773Z"
		fill="url(#paint1_linear_411_1556)"
	/>
	<path d="M219 253H489L439 439H169L219 253Z" fill={color2} />
	<path d="M219 253H489L439 439H169L219 253Z" fill="url(#paint2_linear_411_1556)" />
	<path
		d="M205.672 139.85L269.855 154.39L275.301 177.156L461.433 219.324L425.86 376.345L165.459 317.352L205.672 139.85Z"
		fill={color5}
	/>
	<path
		d="M205.672 139.85L269.855 154.39L275.301 177.156L461.433 219.324L425.86 376.345L165.459 317.352L205.672 139.85Z"
		fill="url(#paint3_linear_411_1556)"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M247.819 164.266L213.197 156.422L213.639 154.471L248.261 162.315L247.819 164.266Z"
		fill={color2}
	/>
	<path
		d="M182.973 172.88L248.243 181.287L255.818 203.436L445.103 227.815L424.536 387.496L159.724 353.389L182.973 172.88Z"
		fill={color5}
	/>
	<path
		d="M182.973 172.88L248.243 181.287L255.818 203.436L445.103 227.815L424.536 387.496L159.724 353.389L182.973 172.88Z"
		fill="url(#paint4_linear_411_1556)"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M227.239 193.201L192.03 188.666L192.285 186.683L227.494 191.218L227.239 193.201Z"
		fill={color2}
	/>
	<path d="M158 213H223.81L234.151 234H425V395H158V213Z" fill={color5} />
	<path d="M158 213H223.81L234.151 234H425V395H158V213Z" fill="url(#paint5_linear_411_1556)" />
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M204.5 227.5H169V225.5H204.5V227.5Z"
		fill={color2}
	/>
	<path d="M119 253H389L439 439H169L119 253Z" fill={color5} />
	<path d="M119 253H389L439 439H169L119 253Z" fill="url(#paint6_linear_411_1556)" />
	<path d="M119 253H389L439 439H169L119 253Z" fill="url(#paint7_linear_411_1556)" />
	<path d="M119 253H389L439 439H169L119 253Z" fill="url(#paint8_linear_411_1556)" />
	<defs>
		<linearGradient
			id="paint0_linear_411_1556"
			x1="298.814"
			y1="240.534"
			x2="298.814"
			y2="765.003"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="white" stop-opacity="0" />
			<stop offset="1" stop-color="white" />
		</linearGradient>
		<linearGradient
			id="paint1_linear_411_1556"
			x1="306.205"
			y1="514.721"
			x2="306.205"
			y2="269.195"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" stop-opacity="0" />
			<stop offset="1" stop-color="#c8d8fa" />
		</linearGradient>
		<linearGradient
			id="paint2_linear_411_1556"
			x1="444"
			y1="262.5"
			x2="432.5"
			y2="439"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" stop-opacity="0" />
			<stop offset="1" stop-color="#111928" />
		</linearGradient>
		<linearGradient
			id="paint3_linear_411_1556"
			x1="372.5"
			y1="39"
			x2="311.238"
			y2="278.083"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#9ab7f6" stop-opacity="0" />
			<stop offset="1" stop-color="#9ab7f6" />
		</linearGradient>
		<linearGradient
			id="paint4_linear_411_1556"
			x1="341.5"
			y1="97.5"
			x2="244"
			y2="371.5"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#9ab7f6" stop-opacity="0" />
			<stop offset="1" stop-color="#9ab7f6" />
		</linearGradient>
		<linearGradient
			id="paint5_linear_411_1556"
			x1="326.5"
			y1="201"
			x2="273"
			y2="379.5"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#9ab7f6" stop-opacity="0" />
			<stop offset="1" stop-color="#9ab7f6" />
		</linearGradient>
		<linearGradient
			id="paint6_linear_411_1556"
			x1="279"
			y1="414.904"
			x2="279"
			y2="239.07"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="white" stop-opacity="0" />
			<stop offset="1" stop-color="white" />
		</linearGradient>
		<linearGradient
			id="paint7_linear_411_1556"
			x1="279"
			y1="255.914"
			x2="279"
			y2="482.465"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" stop-opacity="0" />
			<stop offset="1" stop-color="#c8d8fa" />
		</linearGradient>
		<linearGradient
			id="paint8_linear_411_1556"
			x1="279"
			y1="359.105"
			x2="279"
			y2="458.445"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="white" stop-opacity="0" />
			<stop offset="1" stop-color="white" />
		</linearGradient>
	</defs>
</svg>
