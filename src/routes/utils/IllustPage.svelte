<script lang="ts">
	import { Tabs, Label, TabItem } from 'svelte-5-ui-lib';
	import { random_hex_color_code, random_tailwind_color } from 'runes-webkit';
	import type { Component } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { Copy } from 'runes-webkit';

	interface Props {
		icons: Record<string, Component>;
		title: string;
		defaultSize?: string;
		sizeByTailwind?: boolean;
		minSize?: string;
		maxSize?: string;
		threeTabs?: boolean;
		wrapperClass?: string | undefined;
		div1Class?: string | undefined;
		div2Class?: string | undefined;
		classDiv2?: string | undefined;
		div3Class?: string | undefined;
		classDiv3?: string | undefined;
		div4Class?: string | undefined;
		labelClass?: string | undefined;
		searchClass?: string | undefined;
		classSearch?: string | undefined;
		tab1Class?: string | undefined;
		classTab1?: string | undefined;
		tab2Class?: string | undefined;
		rangeClass?: string | undefined;
		classRange?: string | undefined;
		contentClass?: string;
		step?: string;
		class?: string;
	}
	let {
		icons,
		wrapperClass = 'mx-auto max-w-7xl px-8',
		div1Class = 'relative overflow-x-auto',
		div2Class,
		classDiv2 = 'w-full p-4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3',
		div3Class,
		classDiv3 = 'grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white',
		div4Class = '',
		labelClass = 'text-lg py-4',
		searchClass,
		classSearch = 'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
		tab1Class,
		classTab1 = 'grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white',
		tab2Class = 'flex items-center text-lg',
		rangeClass,
		classRange = 'mt-8 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700',
		contentClass = 'rounded-lg dark_bg_theme mt-4',
		title,
		sizeByTailwind,
		minSize = '50',
		defaultSize = $bindable('100'),
		maxSize = '200',
		step = '10',
		threeTabs = true,
		class: className = '',
		...restProps
	}: Props = $props();

	let searchTerm = $state('');

	let filteredEntries = $derived(
		Object.entries(icons).filter(([name]) => {
			return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
		})
	);
	// $inspect('filteredEntries', filteredEntries);
</script>

<div class="w-full pb-20">
	<div class={wrapperClass}>
		<h1>{title}</h1>

		<div class={div1Class}>
			<div class={twMerge(classDiv2, div2Class)}>
				<Label class={labelClass}>Icon size: {defaultSize}</Label>
				<input
					type="search"
					id="site-search"
					name="q"
					class={twMerge(classSearch, searchClass)}
					placeholder="Search icons"
					bind:value={searchTerm}
				/>
				<input
					id="default-range"
					type="range"
					min={minSize}
					max={maxSize}
					bind:value={defaultSize}
					{step}
					class={twMerge(classRange, rangeClass)}
				/>
			</div>

			<div class={twMerge('w-full py-8 text-left text-gray-500 dark:text-gray-400', className)}>
				<div class={twMerge(classDiv3, div3Class)}>
					{#each filteredEntries as [name, Component] (name)}
						{#if name !== 'Icon'}
							<div class={div4Class}>
								<Component height={defaultSize} {...restProps}></Component>
								<Copy iconName={name} btnClass="m-4">{name}</Copy>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
