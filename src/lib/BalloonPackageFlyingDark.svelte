<script lang="ts">
	import type { TitleType, DescType } from './types';
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
		title?: TitleType;
		desc?: DescType;
	}

	let {
		color1 = '#111928',
		color2 = '#2563eb',
		color3 = '#374151',
		color4 = '#9ab7f6',
		color5 = '#c8d8fa',
		color6 = '#d6e2fb',
		ariaLabel = 'Balloon Package Flying Dark',
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
	width="433"
	height="559"
	viewBox="0 0 433 559"
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
		d="M278 411H376.905H394C394 399.367 373.853 396.918 365.305 392.633C356.758 388.347 351.874 381 340.884 381C329.895 381 317.074 395.694 302.421 396.918C290.699 397.898 281.256 406.714 278 411Z"
		fill={color3}
		fill-opacity="0.6"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M168.026 452.826L184.979 389.558L186.91 390.076L169.958 453.344L168.026 452.826Z"
		fill={color5}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M168.026 452.826L184.979 389.558L186.91 390.076L169.958 453.344L168.026 452.826Z"
		fill="url(#paint0_linear_275_1403)"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M214.386 396.738L215.461 398.425L178.779 421.802L198.858 460.388L197.084 461.311L176.159 421.1L214.386 396.738Z"
		fill={color5}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M214.386 396.738L215.461 398.425L178.779 421.802L198.858 460.388L197.084 461.311L176.159 421.1L214.386 396.738Z"
		fill="url(#paint1_linear_275_1403)"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M157.854 381.591L156.08 382.514L176.159 421.1L139.477 444.477L140.552 446.164L178.779 421.802L157.854 381.591Z"
		fill={color5}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M157.854 381.591L156.08 382.514L176.159 421.1L139.477 444.477L140.552 446.164L178.779 421.802L157.854 381.591Z"
		fill="url(#paint2_linear_275_1403)"
	/>
	<rect
		x="175.033"
		y="411.222"
		width="10"
		height="19"
		rx="2"
		transform="rotate(15 175.033 411.222)"
		fill={color2}
	/>
	<rect
		x="175.033"
		y="411.222"
		width="10"
		height="19"
		rx="2"
		transform="rotate(15 175.033 411.222)"
		fill="url(#paint3_linear_275_1403)"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M185.135 362.165L149.568 352.635L149.381 352.585L149.277 352.422C137.811 334.549 121.305 303.062 108.321 266.461C95.3383 229.866 86.0941 188.176 89.6654 150.043C94.1353 102.315 121.144 69.4602 157.326 51.3142C193.491 33.1765 238.817 29.7315 279.991 40.764C321.165 51.7965 358.695 77.4428 380.946 111.233C403.208 145.039 410.171 186.996 390.178 230.565C374.204 265.375 345.354 296.857 315.813 322.058C286.268 347.263 256.354 366.313 237.489 376.058L237.317 376.147L237.13 376.097L195.765 365.013L185.135 362.165Z"
		fill={color5}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M221.781 34.7273C198.647 51.2191 176.941 80.4991 170.262 129.77C158.362 217.555 174.998 318.453 185.658 361.788L191.023 363.225C194.116 329.503 199.299 278.136 205.173 229.587C211.231 179.508 218.035 132.331 224.05 110.658C234.827 71.8267 247.187 49.0496 258.421 36.3452C246.256 34.5991 233.936 34.058 221.781 34.7273ZM218.075 34.9692C195.499 52.0571 174.798 81.4221 168.28 129.502C156.431 216.912 172.753 317.152 183.455 361.197L175.132 358.967C161.057 317.988 134.229 225.304 133.545 164.301C132.781 96.1295 164.506 55.5421 185.949 40.419C196.34 37.6117 207.127 35.7964 218.075 34.9692ZM180.607 41.9606C158.92 59.5359 130.822 99.831 131.545 164.323C132.226 225.043 158.61 316.716 172.805 358.344L162.56 355.598C153.368 338.076 140.639 305.164 129.849 269.65C118.723 233.031 109.701 193.782 108.722 165.908C107.174 121.867 116.648 89.043 137.907 63.0852C143.993 58.6151 150.496 54.6701 157.326 51.2493C164.739 47.5364 172.538 44.4408 180.607 41.9606ZM131.559 68.0687C108.815 87.1461 93.0377 114.373 89.7244 149.819C86.1651 187.898 95.4162 229.53 108.402 266.077C121.39 302.629 138.131 334.14 149.595 351.99L149.7 352.153L149.887 352.203L159.946 354.898C150.745 336.855 138.414 304.721 127.935 270.232C116.798 233.575 107.712 194.122 106.723 165.978C105.282 124.965 113.333 93.4253 131.559 68.0687ZM260.792 36.7011C249.656 48.834 237.021 71.3989 225.977 111.193C220.01 132.691 213.222 179.705 207.158 229.827C201.268 278.518 196.071 330.049 192.983 363.75L193.419 363.867C207.595 333.137 228.86 285.911 248.104 240.799C267.914 194.359 285.542 150.25 291.124 128.649C301.465 88.6318 301.798 62.7635 298.21 46.6907C292.225 44.3942 286.118 42.4057 279.928 40.7473C273.631 39.0598 267.236 37.7109 260.792 36.7011ZM300.442 47.5635C303.828 64.1807 303.151 90.0976 293.06 129.149C287.433 150.926 269.736 195.185 249.944 241.584C230.756 286.565 209.561 333.642 195.379 364.392L195.831 364.513L200.743 365.83C231.643 333.631 296.499 254.568 330.086 172.595C348.978 126.487 344.762 90.2199 332.915 64.3596C322.738 57.7482 311.821 52.0983 300.442 47.5635ZM336.004 66.4116C347.071 92.513 350.373 128.355 331.936 173.353C298.493 254.977 234.237 333.626 202.947 366.42L211.269 368.65C243.948 340.199 313.524 273.346 344.618 220.858C379.57 161.856 372.098 110.588 360.981 86.9526C353.409 79.4152 345.017 72.531 336.004 66.4116ZM364.87 90.959C374.979 116.915 379.387 166.088 346.339 221.877C315.389 274.122 246.704 340.321 213.596 369.274L222.394 371.631C239.115 361.052 266.595 338.913 293.696 313.553C321.641 287.403 349.078 257.923 363.864 234.273C388.499 194.869 396.282 160.139 388.99 125.217C386.574 120.389 383.853 115.692 380.854 111.144C376.167 104.035 370.803 97.2863 364.87 90.959ZM392.291 132.347C397.152 165.323 388.663 198.378 365.56 235.333C350.631 259.212 323.036 288.836 295.063 315.013C268.743 339.643 241.997 361.305 225.007 372.331L236.82 375.496L237.007 375.546L237.178 375.458C256.032 365.731 286.285 346.813 315.809 321.652C345.329 296.494 374.157 265.065 390.113 230.308C406.087 195.516 404.825 161.747 392.291 132.347Z"
		fill="url(#paint4_linear_275_1403)"
	/>
	<path
		d="M149.338 352.573C179.997 353.968 209.988 362.004 237.237 376.125L234.866 378.144C227.675 384.265 222.516 392.428 220.072 401.549L151.491 383.173C153.935 374.052 153.548 364.403 150.382 355.506L149.338 352.573Z"
		fill={color5}
	/>
	<path
		d="M149.338 352.573C179.997 353.968 209.988 362.004 237.237 376.125L234.866 378.144C227.675 384.265 222.516 392.428 220.072 401.549L151.491 383.173C153.935 374.052 153.548 364.403 150.382 355.506L149.338 352.573Z"
		fill="url(#paint5_linear_275_1403)"
	/>
	<rect
		width="44"
		height="69"
		transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 232.295 467.976)"
		fill={color2}
	/>
	<rect
		width="44"
		height="69"
		transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 232.295 467.976)"
		fill="url(#paint6_linear_275_1403)"
	/>
	<rect
		x="112.52"
		y="435.883"
		width="80"
		height="69"
		transform="rotate(15 112.52 435.883)"
		fill={color2}
	/>
	<rect
		x="111.826"
		y="477.108"
		width="29"
		height="19"
		rx="2"
		transform="rotate(15 111.826 477.108)"
		fill={color6}
	/>
	<rect
		x="112.395"
		y="486.578"
		width="16"
		height="2"
		rx="1"
		transform="rotate(15 112.395 486.578)"
		fill={color2}
	/>
	<path
		d="M204.283 460.471L216.84 463.835L213.734 475.426C213.449 476.493 212.352 477.127 211.285 476.841L202.592 474.511C201.525 474.225 200.891 473.129 201.177 472.062L204.283 460.471Z"
		fill={color5}
		fill-opacity="0.2"
	/>
	<rect
		x="111.359"
		y="490.441"
		width="12"
		height="2"
		rx="1"
		transform="rotate(15 111.359 490.441)"
		fill={color2}
	/>
	<path
		d="M116.5 39.5H35.5H21.5C21.5 30 38 28 45 24.5C52 21 56 15 65 15C74 15 84.5 27 96.5 28C106.1 28.8 113.833 36 116.5 39.5Z"
		fill={color3}
	/>
	<defs>
		<linearGradient
			id="paint0_linear_275_1403"
			x1="185.944"
			y1="389.817"
			x2="168.992"
			y2="453.085"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#9ab7f6" />
			<stop offset="1" stop-color="#9ab7f6" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint1_linear_275_1403"
			x1="200.311"
			y1="392.967"
			x2="183.008"
			y2="457.54"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#9ab7f6" />
			<stop offset="1" stop-color="#9ab7f6" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint2_linear_275_1403"
			x1="171.93"
			y1="385.362"
			x2="154.627"
			y2="449.935"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#9ab7f6" />
			<stop offset="1" stop-color="#9ab7f6" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint3_linear_275_1403"
			x1="180.033"
			y1="403.222"
			x2="180.033"
			y2="430.222"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint4_linear_275_1403"
			x1="258.705"
			y1="119.953"
			x2="193.353"
			y2="363.849"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#d6e2fb" />
			<stop offset="1" stop-color="#d6e2fb" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint5_linear_275_1403"
			x1="211.663"
			y1="295.768"
			x2="185.781"
			y2="392.361"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#2563eb" />
			<stop offset="1" stop-color="#2563eb" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint6_linear_275_1403"
			x1="22"
			y1="-28.5"
			x2="22"
			y2="69"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
	</defs>
</svg>
