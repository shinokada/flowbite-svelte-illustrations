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
		color9?: string;
		color10?: string;
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
		color4 = '#6B7280',
		color5 = '#7F270F',
		color6 = '#9ab7f6',
		color7 = '#F9FAFB',
		color8 = '#FDBA8C',
		color9 = '#c8d8fa',
		color10 = '#d6e2fb',
		ariaLabel = 'Woman Working Servers Dark',
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
	width="533"
	height="460"
	viewBox="0 0 533 460"
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
		d="M420 250C420 248.895 419.105 248 418 248H289C287.895 248 287 248.895 287 250V299C287 300.105 287.895 301 289 301H418C419.105 301 420 300.105 420 299V250Z"
		fill={color3}
	/>
	<path
		d="M420 250C420 248.895 419.105 248 418 248H289C287.895 248 287 248.895 287 250V299C287 300.105 287.895 301 289 301H418C419.105 301 420 300.105 420 299V250Z"
		fill="url(#paint0_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		d="M57 250C57 248.895 57.8954 248 59 248H295C296.105 248 297 248.895 297 250V299C297 300.105 296.105 301 295 301H59C57.8954 301 57 300.105 57 299V250Z"
		fill={color3}
	/>
	<path
		d="M57 250C57 248.895 57.8954 248 59 248H295C296.105 248 297 248.895 297 250V299C297 300.105 296.105 301 295 301H59C57.8954 301 57 300.105 57 299V250Z"
		fill="url(#paint1_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M324 257L324 293L322 293L322 257L324 257Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M334 257L334 293L332 293L332 257L334 257Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M344 257L344 293L342 293L342 257L344 257Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M354 257L354 293L352 293L352 257L354 257Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M364 257L364 293L362 293L362 257L364 257Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M374 257L374 293L372 293L372 257L374 257Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M384 257L384 293L382 293L382 257L384 257Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M394 257L394 293L392 293L392 257L394 257Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M277 273L148 273L148 271L277 271L277 273Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M77 277C79.2091 277 81 275.209 81 273C81 270.791 79.2091 269 77 269C74.7909 269 73 270.791 73 273C73 275.209 74.7909 277 77 277ZM77 279C80.3137 279 83 276.314 83 273C83 269.686 80.3137 267 77 267C73.6863 267 71 269.686 71 273C71 276.314 73.6863 279 77 279Z"
		fill={color4}
	/>
	<path
		d="M101 273C101 276.314 98.3137 279 95 279C91.6863 279 89 276.314 89 273C89 269.686 91.6863 267 95 267C98.3137 267 101 269.686 101 273Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M113 277C115.209 277 117 275.209 117 273C117 270.791 115.209 269 113 269C110.791 269 109 270.791 109 273C109 275.209 110.791 277 113 277ZM113 279C116.314 279 119 276.314 119 273C119 269.686 116.314 267 113 267C109.686 267 107 269.686 107 273C107 276.314 109.686 279 113 279Z"
		fill={color4}
	/>
	<path
		d="M420 303C420 301.895 419.105 301 418 301H289C287.895 301 287 301.895 287 303V352C287 353.105 287.895 354 289 354H418C419.105 354 420 353.105 420 352V303Z"
		fill={color3}
	/>
	<path
		d="M420 303C420 301.895 419.105 301 418 301H289C287.895 301 287 301.895 287 303V352C287 353.105 287.895 354 289 354H418C419.105 354 420 353.105 420 352V303Z"
		fill="url(#paint2_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		d="M57 302.9C57 301.795 57.8954 300.9 59 300.9H295C296.105 300.9 297 301.795 297 302.9V351.9C297 353.004 296.105 353.9 295 353.9H59C57.8954 353.9 57 353.004 57 351.9V302.9Z"
		fill={color3}
	/>
	<path
		d="M57 302.9C57 301.795 57.8954 300.9 59 300.9H295C296.105 300.9 297 301.795 297 302.9V351.9C297 353.004 296.105 353.9 295 353.9H59C57.8954 353.9 57 353.004 57 351.9V302.9Z"
		fill="url(#paint3_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M324 310L324 346L322 346L322 310L324 310Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M334 310L334 346L332 346L332 310L334 310Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M344 310L344 346L342 346L342 310L344 310Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M354 310L354 346L352 346L352 310L354 310Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M364 310L364 346L362 346L362 310L364 310Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M374 310L374 346L372 346L372 310L374 310Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M384 310L384 346L382 346L382 310L384 310Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M394 310L394 346L392 346L392 310L394 310Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M277 326L148 326L148 324L277 324L277 326Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M77 330C79.2091 330 81 328.209 81 326C81 323.791 79.2091 322 77 322C74.7909 322 73 323.791 73 326C73 328.209 74.7909 330 77 330ZM77 332C80.3137 332 83 329.314 83 326C83 322.686 80.3137 320 77 320C73.6863 320 71 322.686 71 326C71 329.314 73.6863 332 77 332Z"
		fill={color4}
	/>
	<path
		d="M119 326C119 329.314 116.314 332 113 332C109.686 332 107 329.314 107 326C107 322.686 109.686 320 113 320C116.314 320 119 322.686 119 326Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M95 330C97.2091 330 99 328.209 99 326C99 323.791 97.2091 322 95 322C92.7909 322 91 323.791 91 326C91 328.209 92.7909 330 95 330ZM95 332C98.3137 332 101 329.314 101 326C101 322.686 98.3137 320 95 320C91.6863 320 89 322.686 89 326C89 329.314 91.6863 332 95 332Z"
		fill={color4}
	/>
	<path
		d="M420 356C420 354.895 419.105 354 418 354H289C287.895 354 287 354.895 287 356V405C287 406.105 287.895 407 289 407H418C419.105 407 420 406.105 420 405V356Z"
		fill={color3}
	/>
	<path
		d="M420 356C420 354.895 419.105 354 418 354H289C287.895 354 287 354.895 287 356V405C287 406.105 287.895 407 289 407H418C419.105 407 420 406.105 420 405V356Z"
		fill="url(#paint4_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		d="M57 356C57 354.895 57.8954 354 59 354H295C296.105 354 297 354.895 297 356V405C297 406.105 296.105 407 295 407H59C57.8954 407 57 406.105 57 405V356Z"
		fill={color3}
	/>
	<path
		d="M57 356C57 354.895 57.8954 354 59 354H295C296.105 354 297 354.895 297 356V405C297 406.105 296.105 407 295 407H59C57.8954 407 57 406.105 57 405V356Z"
		fill="url(#paint5_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M324 363L324 399L322 399L322 363L324 363Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M334 363L334 399L332 399L332 363L334 363Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M344 363L344 399L342 399L342 363L344 363Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M354 363L354 399L352 399L352 363L354 363Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M364 363L364 399L362 399L362 363L364 363Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M374 363L374 399L372 399L372 363L374 363Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M384 363L384 399L382 399L382 363L384 363Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M394 363L394 399L392 399L392 363L394 363Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M277 379L148 379L148 377L277 377L277 379Z"
		fill={color1}
	/>
	<path
		d="M83 379C83 382.314 80.3137 385 77 385C73.6863 385 71 382.314 71 379C71 375.686 73.6863 373 77 373C80.3137 373 83 375.686 83 379Z"
		fill={color1}
	/>
	<path
		d="M101 379C101 382.314 98.3137 385 95 385C91.6863 385 89 382.314 89 379C89 375.686 91.6863 373 95 373C98.3137 373 101 375.686 101 379Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M113 383C115.209 383 117 381.209 117 379C117 376.791 115.209 375 113 375C110.791 375 109 376.791 109 379C109 381.209 110.791 383 113 383ZM113 385C116.314 385 119 382.314 119 379C119 375.686 116.314 373 113 373C109.686 373 107 375.686 107 379C107 382.314 109.686 385 113 385Z"
		fill={color4}
	/>
	<path
		d="M420 409C420 407.895 419.105 407 418 407H289C287.895 407 287 407.895 287 409V458C287 459.105 287.895 460 289 460H418C419.105 460 420 459.105 420 458V409Z"
		fill={color3}
	/>
	<path
		d="M420 409C420 407.895 419.105 407 418 407H289C287.895 407 287 407.895 287 409V458C287 459.105 287.895 460 289 460H418C419.105 460 420 459.105 420 458V409Z"
		fill="url(#paint6_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		d="M57 409C57 407.895 57.8954 407 59 407H295C296.105 407 297 407.895 297 409V458C297 459.105 296.105 460 295 460H59C57.8954 460 57 459.105 57 458V409Z"
		fill={color3}
	/>
	<path
		d="M57 409C57 407.895 57.8954 407 59 407H295C296.105 407 297 407.895 297 409V458C297 459.105 296.105 460 295 460H59C57.8954 460 57 459.105 57 458V409Z"
		fill="url(#paint7_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M324 416L324 452L322 452L322 416L324 416Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M334 416L334 452L332 452L332 416L334 416Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M344 416L344 452L342 452L342 416L344 416Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M354 416L354 452L352 452L352 416L354 416Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M364 416L364 452L362 452L362 416L364 416Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M374 416L374 452L372 452L372 416L374 416Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M384 416L384 452L382 452L382 416L384 416Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M394 416L394 452L392 452L392 416L394 416Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M277 432L148 432L148 430L277 430L277 432Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M77 436C79.2091 436 81 434.209 81 432C81 429.791 79.2091 428 77 428C74.7909 428 73 429.791 73 432C73 434.209 74.7909 436 77 436ZM77 438C80.3137 438 83 435.314 83 432C83 428.686 80.3137 426 77 426C73.6863 426 71 428.686 71 432C71 435.314 73.6863 438 77 438Z"
		fill={color1}
	/>
	<path
		d="M101 432C101 435.314 98.3137 438 95 438C91.6863 438 89 435.314 89 432C89 428.686 91.6863 426 95 426C98.3137 426 101 428.686 101 432Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M113 436C115.209 436 117 434.209 117 432C117 429.791 115.209 428 113 428C110.791 428 109 429.791 109 432C109 434.209 110.791 436 113 436ZM113 438C116.314 438 119 435.314 119 432C119 428.686 116.314 426 113 426C109.686 426 107 428.686 107 432C107 435.314 109.686 438 113 438Z"
		fill={color4}
	/>
	<path
		d="M186.5 453.5H123C121.5 439.5 138.5 437 143.5 429C147.5 422.6 146.5 408.333 145.5 402L169 390L186.5 453.5Z"
		fill={color7}
	/>
	<path
		d="M186.5 453.5H123C121.5 439.5 138.5 437 143.5 429C147.5 422.6 146.5 408.333 145.5 402L169 390L186.5 453.5Z"
		fill="url(#paint8_linear_411_1868)"
	/>
	<path
		d="M122 454.883C122 453.825 122.823 452.95 123.879 452.886L185.879 449.129C187.029 449.059 188 449.973 188 451.125V458C188 459.105 187.105 460 186 460H124C122.895 460 122 459.105 122 458V454.883Z"
		fill={color6}
	/>
	<path
		d="M122 454.883C122 453.825 122.823 452.95 123.879 452.886L185.879 449.129C187.029 449.059 188 449.973 188 451.125V458C188 459.105 187.105 460 186 460H124C122.895 460 122 459.105 122 458V454.883Z"
		fill="url(#paint9_linear_411_1868)"
	/>
	<path
		d="M123.692 158.985C122.937 157.652 123.9 156 125.433 156H178.83C179.554 156 180.221 156.391 180.575 157.021L198.794 189.5L198.002 190.5L145.502 197.5L123.692 158.985Z"
		fill={color10}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M178.83 157H125.433C124.667 157 124.185 157.826 124.562 158.493L146.039 196.42L197.469 189.562L197.594 189.404L179.703 157.511C179.526 157.195 179.192 157 178.83 157ZM198.002 190.5L198.794 189.5L180.575 157.021C180.221 156.391 179.554 156 178.83 156H125.433C123.9 156 122.937 157.652 123.692 158.985L145.502 197.5L198.002 190.5Z"
		fill={color6}
	/>
	<path
		d="M145.027 196.327L204.705 188.017L205.025 190.311L145.347 198.621L145.027 196.327Z"
		fill={color2}
	/>
	<path
		d="M143.677 169.194C143.375 168.661 143.76 168 144.373 168H171.835C172.555 168 173.22 168.387 173.575 169.014L180.824 181.806C181.126 182.339 180.741 183 180.128 183H152.666C151.946 183 151.281 182.613 150.926 181.986L143.677 169.194Z"
		fill={color6}
	/>
	<path
		d="M243.5 453.5H180C178.5 439.5 195.5 437 200.5 429C204.5 422.6 203.5 408.333 202.5 402L226 390L243.5 453.5Z"
		fill={color7}
	/>
	<path
		d="M243.5 453.5H180C178.5 439.5 195.5 437 200.5 429C204.5 422.6 203.5 408.333 202.5 402L226 390L243.5 453.5Z"
		fill="url(#paint10_linear_411_1868)"
	/>
	<path
		d="M179 454.883C179 453.825 179.823 452.95 180.879 452.886L242.879 449.129C244.029 449.059 245 449.973 245 451.125V458C245 459.105 244.105 460 243 460H181C179.895 460 179 459.105 179 458V454.883Z"
		fill={color6}
	/>
	<path
		d="M134.393 413.128L181.302 405.841C182.476 405.659 183.233 404.5 182.928 403.352L138.499 236L132.087 411.079C132.041 412.334 133.151 413.321 134.393 413.128Z"
		fill={color2}
	/>
	<path
		d="M134.393 413.128L181.302 405.841C182.476 405.659 183.233 404.5 182.928 403.352L138.499 236L132.087 411.079C132.041 412.334 133.151 413.321 134.393 413.128Z"
		fill="url(#paint11_linear_411_1868)"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M180.33 391.79L132.83 398.29L132.559 396.309L180.059 389.809L180.33 391.79Z"
		fill={color6}
	/>
	<path
		d="M234.356 403.44L182.337 414.123C181.304 414.335 180.283 413.708 180.006 412.69L142 273.5C138.166 263.167 132.8 237.1 142 215.5C151.2 193.9 229.5 184.833 267.5 183L275 166.5H315C328.6 230.1 300.333 247.667 284.5 248.5H190L235.869 400.905C236.208 402.03 235.508 403.204 234.356 403.44Z"
		fill={color2}
	/>
	<path
		d="M234.356 403.44L182.337 414.123C181.304 414.335 180.283 413.708 180.006 412.69L142 273.5C138.166 263.167 132.8 237.1 142 215.5C151.2 193.9 229.5 184.833 267.5 183L275 166.5H315C328.6 230.1 300.333 247.667 284.5 248.5H190L235.869 400.905C236.208 402.03 235.508 403.204 234.356 403.44Z"
		fill="url(#paint12_linear_411_1868)"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M231.719 386.976L176.219 399.476L175.779 397.524L231.279 385.024L231.719 386.976Z"
		fill={color6}
	/>
	<path
		d="M180.331 191.81C178.56 192.063 177.547 190.18 178.951 189.071C186.901 182.788 201.018 179.14 207.999 178L206.999 188L180.331 191.81Z"
		fill={color8}
	/>
	<path
		d="M180.331 191.81C178.56 192.063 177.547 190.18 178.951 189.071C186.901 182.788 201.018 179.14 207.999 178L206.999 188L180.331 191.81Z"
		fill="url(#paint13_linear_411_1868)"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M126.531 219.331C132.171 203.618 141.348 197.891 145.395 197.011L145.608 197.988C141.989 198.775 133.032 204.181 127.472 219.669C125.962 223.876 125.038 227.542 124.231 230.742C124.108 231.229 123.988 231.705 123.869 232.17C122.972 235.678 122.129 238.629 120.611 241.018C117.528 245.872 111.783 248.249 98.0288 248.999L98.0151 249H56.015C53.0627 249.162 46.5534 251.84 44.9952 261.579C44.5041 264.649 44.5012 268.698 44.7585 273.284C45.0156 277.864 45.5299 282.947 46.0614 288.073C46.0968 288.415 46.1323 288.758 46.1679 289.1C47.1948 298.99 48.2306 308.966 47.4985 315.555C47.3584 316.815 47.1583 318.397 46.9265 320.229C45.911 328.253 44.2872 341.085 44.4397 352.806C44.5334 360.008 45.2987 366.73 47.2561 371.635C48.2333 374.083 49.496 376.049 51.0925 377.4C52.6797 378.744 54.6195 379.5 57.0029 379.5V380.5C54.3863 380.5 52.2167 379.662 50.4464 378.164C48.6855 376.673 47.3426 374.549 46.3274 372.005C44.3002 366.926 43.5339 360.054 43.4398 352.819C43.2862 341.018 44.9231 328.088 45.938 320.072C46.1683 318.253 46.3665 316.687 46.5046 315.445C47.2245 308.965 46.1983 299.079 45.1642 289.116C45.1317 288.803 45.0992 288.49 45.0667 288.176C44.5356 283.053 44.0187 277.948 43.7601 273.34C43.5019 268.739 43.499 264.601 44.0078 261.421C45.6474 251.174 52.5881 248.179 55.9752 248.001L55.9884 248H97.9879C111.723 247.249 116.976 244.876 119.767 240.482C121.187 238.246 121.999 235.447 122.9 231.923C123.018 231.461 123.137 230.987 123.26 230.501C124.067 227.302 125.003 223.587 126.531 219.331Z"
		fill={color3}
	/>
	<path
		d="M301.999 63.9997C300.399 61.5997 296.999 57.9997 295.499 56.4997C289.898 54.8997 284.832 48.8331 283 45.9998C278.833 39.3331 268.999 25.1998 262.999 21.9998C255.499 17.9998 259.999 5.99975 271.999 1.99975C283.999 -2.00025 300.999 5.49975 303.499 22.9997C305.999 40.4997 313.999 34.4997 327.499 44.9997C340.999 55.4997 330.499 72.9997 341.999 88.9997C351.199 101.8 353.165 109.666 352.999 112H318.999C319.399 102.8 319.165 96.1664 318.999 93.9997C308.499 80.9997 303.999 66.9997 301.999 63.9997Z"
		fill={color3}
	/>
	<path d="M284 61L276.5 44L282 31.5C284.8 46.3 292.5 54.6667 296 57L284 61Z" fill={color8} />
	<path
		d="M284 61L276.5 44L282 31.5C284.8 46.3 292.5 54.6667 296 57L284 61Z"
		fill="url(#paint14_linear_411_1868)"
	/>
	<path
		d="M267 42.0002C269.8 48.4002 274.833 47.0002 277 45.5002C279 44.0002 284 38.735 284 29.5002C284 24.0002 283 21.5002 280.5 21.5002C278 21.5002 278 26.0002 277 27.0002C275.999 28.0002 274.5 27.0002 272 24.0002C269.5 21.0002 263 17.0002 262 19.0002C261 21.0002 263.5 34.0002 267 42.0002Z"
		fill={color8}
	/>
	<path
		d="M270.614 29.6954C270.708 30.2477 270.336 30.771 269.783 30.8644C269.231 30.9578 268.708 30.5858 268.614 30.0336C268.521 29.4814 268.893 28.958 269.445 28.8646C269.997 28.7712 270.521 29.1432 270.614 29.6954Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M268.841 26.0982C268.136 26.2264 267.612 26.6219 267.14 27.1341C266.958 27.3322 266.649 27.3449 266.451 27.1625C266.253 26.98 266.241 26.6715 266.423 26.4734C266.968 25.8818 267.669 25.32 268.666 25.1387C269.658 24.9582 270.859 25.1692 272.38 25.9412C272.62 26.0631 272.716 26.3566 272.594 26.5967C272.472 26.8368 272.178 26.9326 271.938 26.8107C270.53 26.0959 269.551 25.9689 268.841 26.0982Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M265.622 29.1697C265.888 29.2096 266.072 29.4578 266.032 29.7241L265.039 36.3591C265.021 36.4775 265.117 36.5823 265.237 36.575L268.106 36.4016C268.374 36.3853 268.606 36.59 268.622 36.8589C268.638 37.1277 268.433 37.3588 268.165 37.375L265.296 37.5485C264.557 37.5932 263.965 36.9464 264.075 36.2147L265.067 29.5798C265.107 29.3135 265.355 29.1299 265.622 29.1697Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M269.128 40.3375C269.733 40.194 270.357 39.9379 271.307 39.5215C271.554 39.4134 271.841 39.5257 271.949 39.7724C272.058 40.019 271.945 40.3066 271.699 40.4147C270.757 40.8275 270.056 41.1196 269.354 41.2863C268.638 41.4561 267.943 41.4916 267.004 41.4278C266.736 41.4096 266.533 41.177 266.551 40.9083C266.569 40.6396 266.802 40.4366 267.07 40.4548C267.946 40.5143 268.537 40.4778 269.128 40.3375Z"
		fill={color1}
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M281.558 26.6763C281.51 25.961 281.176 25.3962 280.721 24.8695C280.545 24.6659 280.567 24.3579 280.77 24.1817C280.974 24.0055 281.282 24.0278 281.458 24.2315C281.984 24.8397 282.463 25.6 282.531 26.6113C282.598 27.6174 282.253 28.787 281.314 30.2101C281.166 30.4349 280.863 30.4969 280.638 30.3486C280.413 30.2003 280.351 29.8979 280.5 29.6731C281.369 28.3554 281.606 27.3968 281.558 26.6763Z"
		fill={color1}
	/>
	<path
		d="M320.5 167H295L316.5 105.5C316.5 116.667 317.1 140.9 319.5 148.5C321.48 154.771 322.235 161.246 322.439 165.004C322.498 166.107 321.605 167 320.5 167Z"
		fill={color7}
	/>
	<path
		d="M320.5 167H295L316.5 105.5C316.5 116.667 317.1 140.9 319.5 148.5C321.48 154.771 322.235 161.246 322.439 165.004C322.498 166.107 321.605 167 320.5 167Z"
		fill="url(#paint15_linear_411_1868)"
	/>
	<path
		d="M205 190L206 172.5L273.5 153C272.167 145.167 269.1 124.5 267.5 104.5C265.979 85.4935 275.477 66.7882 281.145 58.6828C281.645 57.9667 282.558 57.7118 283.409 57.9138C289.053 59.2551 295.043 57.0426 298.309 55.222C299.042 54.8139 299.954 54.8248 300.612 55.345C314.52 66.3479 318.675 86.2294 319 94.9999C322.5 148 289.5 180.5 279 183.5C270.6 185.9 226.167 188.833 205 190Z"
		fill={color7}
	/>
	<path
		d="M205 190L206 172.5L273.5 153C272.167 145.167 269.1 124.5 267.5 104.5C265.979 85.4935 275.477 66.7882 281.145 58.6828C281.645 57.9667 282.558 57.7118 283.409 57.9138C289.053 59.2551 295.043 57.0426 298.309 55.222C299.042 54.8139 299.954 54.8248 300.612 55.345C314.52 66.3479 318.675 86.2294 319 94.9999C322.5 148 289.5 180.5 279 183.5C270.6 185.9 226.167 188.833 205 190Z"
		fill="url(#paint16_linear_411_1868)"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M291.486 97.1192L277.914 152.412L273.621 153.485L273.379 152.515L277.086 151.588L290.515 96.8809L291.486 97.1192Z"
		fill={color6}
	/>
	<path
		d="M405.141 198C405.141 196.895 404.245 196 403.141 196H336.141C335.036 196 334.141 196.895 334.141 198V246C334.141 247.105 335.036 248 336.141 248H403.141C404.245 248 405.141 247.105 405.141 246V198Z"
		fill={color3}
	/>
	<path
		d="M405.141 198C405.141 196.895 404.245 196 403.141 196H336.141C335.036 196 334.141 196.895 334.141 198V246C334.141 247.105 335.036 248 336.141 248H403.141C404.245 248 405.141 247.105 405.141 246V198Z"
		fill="url(#paint17_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		d="M334 198C334 196.895 334.895 196 336 196H383C384.105 196 385 196.895 385 198V246C385 247.105 384.105 248 383 248H336C334.895 248 334 247.105 334 246V198Z"
		fill={color3}
	/>
	<path
		d="M334 198C334 196.895 334.895 196 336 196H383C384.105 196 385 196.895 385 198V246C385 247.105 384.105 248 383 248H336C334.895 248 334 247.105 334 246V198Z"
		fill="url(#paint18_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		d="M385.141 167C385.141 165.895 384.245 165 383.141 165H346.141C345.036 165 344.141 165.895 344.141 167V194C344.141 195.105 345.036 196 346.141 196H383.141C384.245 196 385.141 195.105 385.141 194V167Z"
		fill={color3}
	/>
	<path
		d="M385.141 167C385.141 165.895 384.245 165 383.141 165H346.141C345.036 165 344.141 165.895 344.141 167V194C344.141 195.105 345.036 196 346.141 196H383.141C384.245 196 385.141 195.105 385.141 194V167Z"
		fill="url(#paint19_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		d="M344 167C344 165.895 344.895 165 346 165H372C373.105 165 374 165.895 374 167V194C374 195.105 373.105 196 372 196H346C344.895 196 344 195.105 344 194V167Z"
		fill={color3}
	/>
	<path
		d="M344 167C344 165.895 344.895 165 346 165H372C373.105 165 374 165.895 374 167V194C374 195.105 373.105 196 372 196H346C344.895 196 344 195.105 344 194V167Z"
		fill="url(#paint20_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		d="M89 398C89 396.895 88.1046 396 87 396H2C0.895432 396 0 396.895 0 398V458C0 459.105 0.895432 460 2 460H87C88.1046 460 89 459.105 89 458V398Z"
		fill={color3}
	/>
	<path
		d="M89 398C89 396.895 88.1046 396 87 396H2C0.895432 396 0 396.895 0 398V458C0 459.105 0.895432 460 2 460H87C88.1046 460 89 459.105 89 458V398Z"
		fill="url(#paint21_linear_411_1868)"
	/>
	<path
		d="M0 398C0 396.895 0.895431 396 2 396H61C62.1046 396 63 396.895 63 398V458C63 459.105 62.1046 460 61 460H2C0.89543 460 0 459.105 0 458V398Z"
		fill={color3}
	/>
	<path
		d="M0 398C0 396.895 0.895431 396 2 396H61C62.1046 396 63 396.895 63 398V458C63 459.105 62.1046 460 61 460H2C0.89543 460 0 459.105 0 458V398Z"
		fill="url(#paint22_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		d="M533 392C533 390.895 532.105 390 531 390H437C435.895 390 435 390.895 435 392V458C435 459.105 435.895 460 437 460H531C532.105 460 533 459.105 533 458V392Z"
		fill={color3}
	/>
	<path
		d="M533 392C533 390.895 532.105 390 531 390H437C435.895 390 435 390.895 435 392V458C435 459.105 435.895 460 437 460H531C532.105 460 533 459.105 533 458V392Z"
		fill="url(#paint23_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		d="M435.25 392C435.25 390.895 436.145 390 437.25 390H502.25C503.355 390 504.25 390.895 504.25 392V458C504.25 459.105 503.355 460 502.25 460H437.25C436.145 460 435.25 459.105 435.25 458V392Z"
		fill={color3}
	/>
	<path
		d="M435.25 392C435.25 390.895 436.145 390 437.25 390H502.25C503.355 390 504.25 390.895 504.25 392V458C504.25 459.105 503.355 460 502.25 460H437.25C436.145 460 435.25 459.105 435.25 458V392Z"
		fill="url(#paint24_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		d="M504 328C504 326.895 503.105 326 502 326H417C415.895 326 415 326.895 415 328V388C415 389.105 415.895 390 417 390H502C503.105 390 504 389.105 504 388V328Z"
		fill={color3}
	/>
	<path
		d="M504 328C504 326.895 503.105 326 502 326H417C415.895 326 415 326.895 415 328V388C415 389.105 415.895 390 417 390H502C503.105 390 504 389.105 504 388V328Z"
		fill="url(#paint25_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		d="M414.25 328C414.25 326.895 415.145 326 416.25 326H475.25C476.355 326 477.25 326.895 477.25 328V388C477.25 389.105 476.355 390 475.25 390H416.25C415.145 390 414.25 389.105 414.25 388V328Z"
		fill={color3}
	/>
	<path
		d="M414.25 328C414.25 326.895 415.145 326 416.25 326H475.25C476.355 326 477.25 326.895 477.25 328V388C477.25 389.105 476.355 390 475.25 390H416.25C415.145 390 414.25 389.105 414.25 388V328Z"
		fill="url(#paint26_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		d="M482 292C482 290.895 481.105 290 480 290H434C432.895 290 432 290.895 432 292V324C432 325.105 432.895 326 434 326H480C481.105 326 482 325.105 482 324V292Z"
		fill={color3}
	/>
	<path
		d="M482 292C482 290.895 481.105 290 480 290H434C432.895 290 432 290.895 432 292V324C432 325.105 432.895 326 434 326H480C481.105 326 482 325.105 482 324V292Z"
		fill="url(#paint27_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<path
		d="M432.25 292C432.25 290.895 433.145 290 434.25 290H466.25C467.355 290 468.25 290.895 468.25 292V324C468.25 325.105 467.355 326 466.25 326H434.25C433.145 326 432.25 325.105 432.25 324V292Z"
		fill={color3}
	/>
	<path
		d="M432.25 292C432.25 290.895 433.145 290 434.25 290H466.25C467.355 290 468.25 290.895 468.25 292V324C468.25 325.105 467.355 326 466.25 326H434.25C433.145 326 432.25 325.105 432.25 324V292Z"
		fill="url(#paint28_linear_411_1868)"
		fill-opacity="0.7"
	/>
	<defs>
		<linearGradient
			id="paint0_linear_411_1868"
			x1="357.581"
			y1="301"
			x2="361.449"
			y2="265.648"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint1_linear_411_1868"
			x1="212.5"
			y1="339.5"
			x2="165.306"
			y2="268.087"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint2_linear_411_1868"
			x1="357.581"
			y1="354"
			x2="361.449"
			y2="318.648"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint3_linear_411_1868"
			x1="212.5"
			y1="392.4"
			x2="165.306"
			y2="320.987"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint4_linear_411_1868"
			x1="357.581"
			y1="407"
			x2="361.449"
			y2="371.648"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint5_linear_411_1868"
			x1="212.5"
			y1="445.5"
			x2="165.306"
			y2="374.087"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint6_linear_411_1868"
			x1="357.581"
			y1="460"
			x2="361.449"
			y2="424.648"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint7_linear_411_1868"
			x1="212.5"
			y1="498.5"
			x2="165.306"
			y2="427.087"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint8_linear_411_1868"
			x1="167.5"
			y1="351"
			x2="120.829"
			y2="433.372"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint9_linear_411_1868"
			x1="122"
			y1="454.5"
			x2="188"
			y2="454.5"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#2563eb" stop-opacity="0" />
			<stop offset="1" stop-color="#2563eb" />
		</linearGradient>
		<linearGradient
			id="paint10_linear_411_1868"
			x1="224.5"
			y1="351"
			x2="177.829"
			y2="433.372"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint11_linear_411_1868"
			x1="151.499"
			y1="417.5"
			x2="245.365"
			y2="378.979"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" stop-opacity="0" />
			<stop offset="1" stop-color="#111928" />
		</linearGradient>
		<linearGradient
			id="paint12_linear_411_1868"
			x1="269.469"
			y1="335.393"
			x2="388.066"
			y2="123.232"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" stop-opacity="0" />
			<stop offset="1" stop-color="#111928" />
		</linearGradient>
		<linearGradient
			id="paint13_linear_411_1868"
			x1="196.129"
			y1="175.2"
			x2="196.129"
			y2="189.11"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#7F270F" />
			<stop offset="1" stop-color="#7F270F" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint14_linear_411_1868"
			x1="288.878"
			y1="25.8037"
			x2="288.878"
			y2="54.1041"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#7F270F" />
			<stop offset="1" stop-color="#7F270F" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint15_linear_411_1868"
			x1="312.5"
			y1="145.5"
			x2="352.028"
			y2="162.857"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint16_linear_411_1868"
			x1="351.429"
			y1="190"
			x2="270.623"
			y2="25.324"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#c8d8fa" />
			<stop offset="1" stop-color="#c8d8fa" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint17_linear_411_1868"
			x1="359.139"
			y1="285.774"
			x2="397.154"
			y2="268.429"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint18_linear_411_1868"
			x1="367.044"
			y1="285.774"
			x2="337.252"
			y2="276.01"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint19_linear_411_1868"
			x1="358.576"
			y1="218.519"
			x2="380.765"
			y2="208.713"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint20_linear_411_1868"
			x1="363.437"
			y1="218.519"
			x2="345.868"
			y2="212.837"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint21_linear_411_1868"
			x1="10"
			y1="409"
			x2="139.5"
			y2="368.5"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#6B7280" stop-opacity="0" />
			<stop offset="1" stop-color="#6B7280" />
		</linearGradient>
		<linearGradient
			id="paint22_linear_411_1868"
			x1="40.8187"
			y1="506.491"
			x2="4.0436"
			y2="494.394"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint23_linear_411_1868"
			x1="469.504"
			y1="510.849"
			x2="521.516"
			y2="486.517"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint24_linear_411_1868"
			x1="479.956"
			y1="510.849"
			x2="439.689"
			y2="497.586"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint25_linear_411_1868"
			x1="446.335"
			y1="436.491"
			x2="493.684"
			y2="414.488"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint26_linear_411_1868"
			x1="455.069"
			y1="436.491"
			x2="418.294"
			y2="424.394"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint27_linear_411_1868"
			x1="449.604"
			y1="352.151"
			x2="476.217"
			y2="339.8"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
		<linearGradient
			id="paint28_linear_411_1868"
			x1="455.575"
			y1="352.151"
			x2="434.626"
			y2="345.151"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#111928" />
			<stop offset="1" stop-color="#111928" stop-opacity="0" />
		</linearGradient>
	</defs>
</svg>
