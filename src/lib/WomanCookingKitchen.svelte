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
		color7?: string;
		color8?: string;
		ariaLabel?: string;
		class?: string;
		height?: string;
		title?: TitleType;
		desc?: DescType;
	}

	let {
		color1 = '#111928',
		color2 = '#2563eb',
		color3 = '#7F270F',
		color4 = '#9ab7f6',
		color5 = '#F9FAFB',
		color6 = '#FDBA8C',
		color7 = '#c8d8fa',
		color8 = '#d6e2fb',
		ariaLabel = 'Woman Cooking Kitchen',
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
	width="525"
	height="602"
	viewBox="0 0 525 602"
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
		d="M438 182.5C438 283.292 356.292 365 255.5 365C154.708 365 73 283.292 73 182.5C73 81.708 154.708 0 255.5 0C356.292 0 438 81.708 438 182.5Z"
		fill={color8}
	/>
	<path
		d="M438 182.5C438 283.292 356.292 365 255.5 365C154.708 365 73 283.292 73 182.5C73 81.708 154.708 0 255.5 0C356.292 0 438 81.708 438 182.5Z"
		fill="url(#paint0_linear_748_174)"
	/>
	<path
		d="M243.501 127.5C238.301 139.9 240.668 146.333 242.501 148C251.003 158 289 156 289.5 146.5C290 137 288 126 284 120C280 114 283 101.5 282.5 94.4999C282 87.4999 266.5 73.4999 254 84.4999C241.5 95.4999 250.001 112 243.501 127.5Z"
		fill={color1}
	/>
	<path
		d="M225.501 144C241.501 137.6 257.168 134.333 263.001 133.5C274.335 133.5 300.501 139.7 305.001 146C310.766 154.071 318.07 185.559 321.59 202.945C321.817 204.067 321.052 205.138 319.919 205.304L298.001 208.5L225.501 207L222.302 212.998C221.841 213.864 220.819 214.267 219.891 213.949L196.245 205.865C195.18 205.5 194.628 204.322 195.022 203.268C207.492 169.918 217.652 147.14 225.501 144Z"
		fill={color5}
	/>
	<path
		d="M225.501 144C241.501 137.6 257.168 134.333 263.001 133.5C274.335 133.5 300.501 139.7 305.001 146C310.766 154.071 318.07 185.559 321.59 202.945C321.817 204.067 321.052 205.138 319.919 205.304L298.001 208.5L225.501 207L222.302 212.998C221.841 213.864 220.819 214.267 219.891 213.949L196.245 205.865C195.18 205.5 194.628 204.322 195.022 203.268C207.492 169.918 217.652 147.14 225.501 144Z"
		fill="url(#paint1_linear_748_174)"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M223.773 210.644L195.973 200.944L196.632 199.056L224.432 208.756L223.773 210.644Z"
		fill={color4}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M294.672 204.985L320.957 200.384L320.612 198.414L294.327 203.015L294.672 204.985Z"
		fill={color4}
	/>
	<path
		d="M255.5 137.5L258 111H270.5L272 137.5C271 138.5 268 140.5 264 140.5C260 140.5 256.667 138.5 255.5 137.5Z"
		fill={color6}
	/>
	<path
		d="M255.5 137.5L258 111H270.5L272 137.5C271 138.5 268 140.5 264 140.5C260 140.5 256.667 138.5 255.5 137.5Z"
		fill="url(#paint2_linear_748_174)"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M238.957 139.204C243.527 153.93 241.993 172.135 240.497 186.603L238.507 186.397C240.011 171.866 241.477 154.07 237.047 139.796L238.957 139.204Z"
		fill="black"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M284.031 136.753C279.519 154.453 281.026 177.054 282.336 186.143L284.315 185.857C283.021 176.875 281.552 154.576 285.969 137.247L284.031 136.753Z"
		fill="black"
	/>
	<path
		d="M288 185.5H234.5C232.9 191.9 227.833 202.5 225.5 207L222.5 294.5H309L298 208.5L288 185.5Z"
		fill={color2}
	/>
	<path
		d="M288 185.5H234.5C232.9 191.9 227.833 202.5 225.5 207L222.5 294.5H309L298 208.5L288 185.5Z"
		fill="url(#paint3_linear_748_174)"
	/>
	<path d="M80 289H445L525 366H0L80 289Z" fill={color8} />
	<path d="M80 289H445L525 366H0L80 289Z" fill="url(#paint4_linear_748_174)" />
	<path d="M0 602H525V365H0V602Z" fill={color8} />
	<path d="M0 602H525V365H0V602Z" fill="url(#paint5_linear_748_174)" />
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M503 580H22V388H503V580ZM20 582V386H505V582H20Z"
		fill="white"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M483 560H42V408H483V560ZM40 562V406H485V562H40Z"
		fill="white"
	/>
	<path d="M203 315H328L348 351H183L203 315Z" fill="white" />
	<path d="M183 351H348V356H183V351Z" fill={color8} />
	<path d="M183 351H348V356H183V351Z" fill="url(#paint6_linear_748_174)" />
	<path
		d="M313.541 315.334L273 338.5L283 346L316.398 319.56C317.713 318.519 317.687 316.515 316.345 315.508C315.528 314.896 314.427 314.828 313.541 315.334Z"
		fill={color2}
	/>
	<path
		d="M313.541 315.334L273 338.5L283 346L316.398 319.56C317.713 318.519 317.687 316.515 316.345 315.508C315.528 314.896 314.427 314.828 313.541 315.334Z"
		fill="url(#paint7_linear_748_174)"
	/>
	<path
		d="M283.785 345.371C282.896 346.963 279.634 346.834 276.5 345.083C273.366 343.332 271.547 340.622 272.436 339.03C273.326 337.438 276.587 337.567 279.721 339.318C282.855 341.069 284.675 343.779 283.785 345.371Z"
		fill={color8}
	/>
	<path
		d="M283.785 345.371C282.896 346.963 279.634 346.834 276.5 345.083C273.366 343.332 271.547 340.622 272.436 339.03C273.326 337.438 276.587 337.567 279.721 339.318C282.855 341.069 284.675 343.779 283.785 345.371Z"
		fill="url(#paint8_linear_748_174)"
	/>
	<path
		d="M262.65 344.932C261.761 346.524 259.017 346.684 256.521 345.29C254.025 343.896 252.723 341.475 253.612 339.883C254.502 338.291 257.246 338.13 259.742 339.525C262.238 340.919 263.54 343.34 262.65 344.932Z"
		fill={color8}
	/>
	<path
		d="M262.65 344.932C261.761 346.524 259.017 346.684 256.521 345.29C254.025 343.896 252.723 341.475 253.612 339.883C254.502 338.291 257.246 338.13 259.742 339.525C262.238 340.919 263.54 343.34 262.65 344.932Z"
		fill="url(#paint9_linear_748_174)"
	/>
	<path
		d="M243.741 343.852C242.034 344.496 239.834 342.848 238.826 340.173C237.817 337.498 238.383 334.808 240.09 334.164C241.796 333.521 243.997 335.169 245.005 337.844C246.014 340.519 245.447 343.209 243.741 343.852Z"
		fill={color8}
	/>
	<path
		d="M243.741 343.852C242.034 344.496 239.834 342.848 238.826 340.173C237.817 337.498 238.383 334.808 240.09 334.164C241.796 333.521 243.997 335.169 245.005 337.844C246.014 340.519 245.447 343.209 243.741 343.852Z"
		fill="url(#paint10_linear_748_174)"
	/>
	<path
		d="M229.272 343.947C227.885 345.13 225.52 344.636 223.991 342.844C222.462 341.051 222.346 338.638 223.734 337.454C225.121 336.271 227.486 336.765 229.015 338.558C230.545 340.351 230.66 342.763 229.272 343.947Z"
		fill={color8}
	/>
	<path
		d="M229.272 343.947C227.885 345.13 225.52 344.636 223.991 342.844C222.462 341.051 222.346 338.638 223.734 337.454C225.121 336.271 227.486 336.765 229.015 338.558C230.545 340.351 230.66 342.763 229.272 343.947Z"
		fill="url(#paint11_linear_748_174)"
	/>
	<path
		d="M258.053 323.003L311.001 336C311.001 338 304.001 340.5 292.001 338C282.401 336 277.335 332.5 276.001 331L257.088 327.481C255.721 327.227 254.894 325.823 255.333 324.504C255.711 323.372 256.894 322.719 258.053 323.003Z"
		fill={color8}
	/>
	<path
		d="M258.053 323.003L311.001 336C311.001 338 304.001 340.5 292.001 338C282.401 336 277.335 332.5 276.001 331L257.088 327.481C255.721 327.227 254.894 325.823 255.333 324.504C255.711 323.372 256.894 322.719 258.053 323.003Z"
		fill="url(#paint12_linear_748_174)"
	/>
	<path d="M185.5 297H81.5L22.5 354.5H146.5L185.5 297Z" fill="url(#paint13_linear_748_174)" />
	<path
		d="M96 337.5C96 342.747 85.4787 347 72.5 347C59.5213 347 49 342.747 49 337.5C49 332.253 59.5213 328 72.5 328C85.4787 328 96 332.253 96 337.5Z"
		fill="url(#paint14_linear_748_174)"
	/>
	<path
		d="M162 310.5C162 313.538 155.06 316 146.5 316C137.94 316 131 313.538 131 310.5C131 307.462 137.94 305 146.5 305C155.06 305 162 307.462 162 310.5Z"
		fill="url(#paint15_linear_748_174)"
	/>
	<path
		d="M102 317C110.19 317 116.468 314.667 116.83 312L119 297H85L87.1702 312C87.5319 314.667 93.8097 317 102 317Z"
		fill="white"
	/>
	<path
		d="M119 296.667C119 299.796 111.389 302.333 102 302.333C92.6112 302.333 85 299.796 85 296.667C85 293.537 92.6112 291 102 291C111.389 291 119 293.537 119 296.667Z"
		fill={color8}
	/>
	<path
		d="M119 296.667C119 299.796 111.389 302.333 102 302.333C92.6112 302.333 85 299.796 85 296.667C85 293.537 92.6112 291 102 291C111.389 291 119 293.537 119 296.667Z"
		fill="url(#paint16_linear_748_174)"
	/>
	<path
		d="M125.5 348C136.822 348 145.5 344.5 146 340.5L149 318H102L105 340.5C105.5 344.5 114.178 348 125.5 348Z"
		fill="white"
	/>
	<path
		d="M149 317.5C149 322.194 138.479 326 125.5 326C112.521 326 102 322.194 102 317.5C102 312.806 112.521 309 125.5 309C138.479 309 149 312.806 149 317.5Z"
		fill={color8}
	/>
	<path
		d="M149 317.5C149 322.194 138.479 326 125.5 326C112.521 326 102 322.194 102 317.5C102 312.806 112.521 309 125.5 309C138.479 309 149 312.806 149 317.5Z"
		fill="url(#paint17_linear_748_174)"
	/>
	<path
		d="M409.182 304.244C414.026 307.083 421.048 307.318 423.954 307.08L424.397 306.183L424.388 303.948C423.64 303.579 421.562 302.217 419.224 299.724C416.303 296.608 412.346 294.456 411.161 296.856C410.212 298.775 419.59 303.874 424.397 306.183C422.307 305.523 417.139 303.49 413.19 300.647C408.254 297.093 403.128 300.695 409.182 304.244Z"
		fill={color8}
	/>
	<path
		d="M409.182 304.244C414.026 307.083 421.048 307.318 423.954 307.08L424.397 306.183L424.388 303.948C423.64 303.579 421.562 302.217 419.224 299.724C416.303 296.608 412.346 294.456 411.161 296.856C410.212 298.775 419.59 303.874 424.397 306.183C422.307 305.523 417.139 303.49 413.19 300.647C408.254 297.093 403.128 300.695 409.182 304.244Z"
		fill="url(#paint18_linear_748_174)"
	/>
	<path
		d="M427.518 302.08L462.566 316.117C463.384 316.445 463.859 317.301 463.704 318.168C463.515 319.226 462.469 319.903 461.425 319.642L424.798 310.484C422.452 309.898 421.01 307.537 421.561 305.182C422.177 302.542 425.001 301.072 427.518 302.08Z"
		fill={color2}
	/>
	<path
		d="M427.518 302.08L462.566 316.117C463.384 316.445 463.859 317.301 463.704 318.168C463.515 319.226 462.469 319.903 461.425 319.642L424.798 310.484C422.452 309.898 421.01 307.537 421.561 305.182C422.177 302.542 425.001 301.072 427.518 302.08Z"
		fill="url(#paint19_linear_748_174)"
	/>
	<path
		d="M405.499 309C411.099 308.6 417.499 311.5 419.999 313V314L419 316C418.167 316 415.7 316.3 412.5 317.5C408.5 319 404 319.176 404 316.5C404 314.359 414.666 313.941 419.999 314C417.832 313.667 412.299 313.2 407.499 314C401.499 315 398.499 309.5 405.499 309Z"
		fill={color8}
	/>
	<path
		d="M405.499 309C411.099 308.6 417.499 311.5 419.999 313V314L419 316C418.167 316 415.7 316.3 412.5 317.5C408.5 319 404 319.176 404 316.5C404 314.359 414.666 313.941 419.999 314C417.832 313.667 412.299 313.2 407.499 314C401.499 315 398.499 309.5 405.499 309Z"
		fill="url(#paint20_linear_748_174)"
	/>
	<path
		d="M422.047 311.544L459.019 319.194C459.881 319.372 460.5 320.131 460.5 321.012C460.5 322.087 459.589 322.938 458.516 322.865L420.849 320.296C418.436 320.132 416.602 318.062 416.729 315.647C416.871 312.939 419.392 310.995 422.047 311.544Z"
		fill={color2}
	/>
	<path
		d="M422.047 311.544L459.019 319.194C459.881 319.372 460.5 320.131 460.5 321.012C460.5 322.087 459.589 322.938 458.516 322.865L420.849 320.296C418.436 320.132 416.602 318.062 416.729 315.647C416.871 312.939 419.392 310.995 422.047 311.544Z"
		fill="url(#paint21_linear_748_174)"
	/>
	<path
		d="M393.002 329.5C397.402 326.3 407.835 328.833 412.502 330.5C415.711 331.5 422.5 336 419 344C415.5 352 405.502 352 397.502 348C389.502 344 387.502 333.5 393.002 329.5Z"
		fill="white"
	/>
	<path
		d="M428 335C428 331 432.667 329.667 435 329.5C440.5 329.5 443 333 444 340C445 347 441 353 434.5 351C428 349 428 340 428 335Z"
		fill="white"
	/>
	<path
		d="M369.501 330C375.901 329.2 377.835 331 378.001 332C379.003 339.5 364.001 343.5 362.501 340.5C361.001 337.5 361.501 331 369.501 330Z"
		fill="white"
	/>
	<path
		d="M376 311.5C376 307.1 379.667 305.667 381.5 305.5C390 304.5 384 321 381.5 321C379 321 376 317 376 311.5Z"
		fill="white"
	/>
	<path
		d="M361.5 315C362.616 312.767 364.304 311.469 365.867 310.758C367.824 309.868 370.444 310.448 370.601 312.592C370.918 316.932 366.815 324.886 364.5 324.5C361.5 324 359 320 361.5 315Z"
		fill="white"
	/>
	<path
		d="M347.501 312.5C349.735 311.383 351.449 311.566 352.643 312.177C354.206 312.977 356.03 315.549 354.341 316.031C351.71 316.781 343.776 314.363 347.501 312.5Z"
		fill="white"
	/>
	<path
		d="M264 124C252.8 120.8 252 104 253 94C262.599 104 274 100.167 278.5 99C275.3 121.4 267.5 125 264 124Z"
		fill={color6}
	/>
	<path
		d="M273.485 107.621C273.742 108.135 273.534 108.76 273.02 109.016C272.507 109.273 271.882 109.065 271.625 108.551C271.368 108.038 271.577 107.413 272.09 107.156C272.604 106.899 273.229 107.108 273.485 107.621Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M271.622 104.174C270.907 104.345 270.393 104.779 269.939 105.33C269.763 105.543 269.448 105.573 269.235 105.397C269.022 105.222 268.992 104.906 269.168 104.693C269.692 104.057 270.379 103.443 271.39 103.201C272.395 102.961 273.637 103.11 275.237 103.815C275.489 103.926 275.604 104.221 275.492 104.474C275.381 104.727 275.086 104.841 274.833 104.73C273.352 104.077 272.342 104.002 271.622 104.174Z"
		fill={color1}
	/>
	<path
		d="M258.081 107.621C257.824 108.135 258.032 108.759 258.546 109.016C259.06 109.273 259.684 109.065 259.941 108.551C260.198 108.037 259.99 107.413 259.476 107.156C258.962 106.899 258.338 107.107 258.081 107.621Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M259.944 104.173C260.659 104.344 261.173 104.779 261.627 105.329C261.803 105.542 262.118 105.573 262.331 105.397C262.544 105.221 262.574 104.906 262.399 104.693C261.874 104.057 261.187 103.442 260.177 103.201C259.171 102.961 257.929 103.109 256.33 103.814C256.077 103.926 255.963 104.221 256.074 104.474C256.185 104.726 256.481 104.841 256.733 104.73C258.214 104.077 259.224 104.001 259.944 104.173Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M266.695 106.08C266.419 106.1 266.212 106.34 266.232 106.615L266.724 113.476C266.733 113.599 266.627 113.699 266.505 113.682L263.586 113.279C263.312 113.241 263.06 113.432 263.022 113.705C262.984 113.979 263.176 114.231 263.449 114.269L266.369 114.672C267.12 114.776 267.776 114.161 267.722 113.405L267.229 106.543C267.209 106.268 266.97 106.061 266.695 106.08Z"
		fill={color1}
	/>
	<path
		d="M260 116H270L-nan -nanL270 116C270 118.209 267.761 120 265 120L-nan -nanL265 120C262.239 120 260 118.209 260 116L-nan -nanL260 116Z"
		fill="white"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M298 208.5L299 217.5C295.667 236.667 288.101 279.9 284.501 299.5C280.001 324 286.001 332 289.001 329.5C291.401 327.5 292.668 316.667 293.001 311.5C300.501 288.167 316.101 238 318.501 224C319.692 217.053 319.619 210.64 319.039 205.432L298 208.5Z"
		fill={color6}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M298 208.5L299 217.5C295.667 236.667 288.101 279.9 284.501 299.5C280.001 324 286.001 332 289.001 329.5C291.401 327.5 292.668 316.667 293.001 311.5C300.501 288.167 316.101 238 318.501 224C319.692 217.053 319.619 210.64 319.039 205.432L298 208.5Z"
		fill="url(#paint22_linear_748_174)"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M196.997 206.1C192.502 217.912 189.86 229.983 192.897 237.878C198.897 253.478 243.064 298.045 264.397 318.378C266.797 333.178 272.064 334.878 274.397 333.878C281.997 326.678 272.897 308.878 267.397 300.878L212.897 232.878L219.016 213.579L196.997 206.1Z"
		fill={color6}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M196.997 206.1C192.502 217.912 189.86 229.983 192.897 237.878C198.897 253.478 243.064 298.045 264.397 318.378C266.797 333.178 272.064 334.878 274.397 333.878C281.997 326.678 272.897 308.878 267.397 300.878L212.897 232.878L219.016 213.579L196.997 206.1Z"
		fill="url(#paint23_linear_748_174)"
	/>
	<defs>
		<linearGradient
			id="paint0_linear_748_174"
			x1="256.042"
			y1="37.3902"
			x2="256.042"
			y2="290.22"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="white" stop-opacity="0" />
			<stop offset="1" stop-color="white" />
		</linearGradient>
		<linearGradient
			id="paint1_linear_748_174"
			x1="244.321"
			y1="239.756"
			x2="254.074"
			y2="181.55"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint2_linear_748_174"
			x1="265.974"
			y1="105.304"
			x2="265.974"
			y2="133.604"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#7F270F" />
			<stop offset="1" stop-color="#7F270F" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint3_linear_748_174"
			x1="265.716"
			y1="240.089"
			x2="265.716"
			y2="143.002"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" stop-opacity="0" />
			<stop offset="1" stop-color="#111928" />
		</linearGradient>
		<linearGradient
			id="paint4_linear_748_174"
			x1="85.111"
			y1="512.5"
			x2="85.111"
			y2="289"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint5_linear_748_174"
			x1="262.5"
			y1="672.35"
			x2="262.5"
			y2="341.358"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#F9FAFB" />
			<stop offset="1" stop-color="#F9FAFB" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint6_linear_748_174"
			x1="255.5"
			y1="306.911"
			x2="180"
			y2="407.5"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint7_linear_748_174"
			x1="295.982"
			y1="330.276"
			x2="295.982"
			y2="302.219"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" stop-opacity="0" />
			<stop offset="1" stop-color="#111928" />
		</linearGradient>
		<linearGradient
			id="paint8_linear_748_174"
			x1="307.436"
			y1="288.096"
			x2="292.48"
			y2="281.234"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint9_linear_748_174"
			x1="287.597"
			y1="288.382"
			x2="275.762"
			y2="282.719"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint10_linear_748_174"
			x1="299.276"
			y1="316.72"
			x2="293.883"
			y2="304.76"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint11_linear_748_174"
			x1="272.983"
			y1="300.371"
			x2="265.541"
			y2="292.516"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint12_linear_748_174"
			x1="279.327"
			y1="176.578"
			x2="208.922"
			y2="186.282"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint13_linear_748_174"
			x1="86"
			y1="445"
			x2="96"
			y2="230.5"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#9ab7f6" />
			<stop offset="1" stop-color="#9ab7f6" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint14_linear_748_174"
			x1="58"
			y1="351"
			x2="70.7631"
			y2="306.188"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#9ab7f6" />
			<stop offset="1" stop-color="#9ab7f6" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint15_linear_748_174"
			x1="136.936"
			y1="318.316"
			x2="143.536"
			y2="291.918"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#9ab7f6" />
			<stop offset="1" stop-color="#9ab7f6" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint16_linear_748_174"
			x1="93.5"
			y1="287"
			x2="122.5"
			y2="287"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint17_linear_748_174"
			x1="113.75"
			y1="303"
			x2="153.838"
			y2="303"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint18_linear_748_174"
			x1="375.274"
			y1="382.14"
			x2="355.091"
			y2="370.136"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint19_linear_748_174"
			x1="442.779"
			y1="310.107"
			x2="439.093"
			y2="327.977"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" stop-opacity="0" />
			<stop offset="1" stop-color="#111928" />
		</linearGradient>
		<linearGradient
			id="paint20_linear_748_174"
			x1="409.6"
			y1="224.142"
			x2="386.188"
			y2="225.965"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint21_linear_748_174"
			x1="438.483"
			y1="316.76"
			x2="438"
			y2="335"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" stop-opacity="0" />
			<stop offset="1" stop-color="#111928" />
		</linearGradient>
		<linearGradient
			id="paint22_linear_748_174"
			x1="349"
			y1="-29.5"
			x2="461.377"
			y2="53.8129"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#7F270F" />
			<stop offset="1" stop-color="#7F270F" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint23_linear_748_174"
			x1="346.579"
			y1="-35.447"
			x2="452.417"
			y2="143.445"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#7F270F" />
			<stop offset="1" stop-color="#7F270F" stop-opacity="0" />
		</linearGradient>
	</defs>
</svg>
