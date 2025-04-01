<script lang="ts">
	import { IconPage, filterIconsByKeyword } from 'runes-webkit';
	import IllustPage from './utils/IllustPage.svelte';
	import * as icons from '$lib';
	import { A404NotFoundShoppingDark } from '$lib';
	import { excludeIconsByKeyword } from './utils/helper';

	const keywordsToFilter = 'Dark';
	const keyIcons = excludeIconsByKeyword(icons, keywordsToFilter);
	let searchTerm = $state('');

	const DarkIcons = filterIconsByKeyword(icons, keywordsToFilter);
	const LightIcons = excludeIconsByKeyword(icons, keywordsToFilter);

	let filteredEntries = $derived(
		Object.entries(keyIcons).filter(([name]) => {
			return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
		})
	);
</script>

<div class="relative dark:hidden">
<IllustPage
	minSize="100"
	defaultSize="140"
	maxSize="200"
	step="10"
	title="Flowbite Svelte Illustrations"
	icons={LightIcons}
	threeTabs={false}
/>
</div>
<div class="relative hidden dark:block">
	<IllustPage
	minSize="100"
	defaultSize="140"
	maxSize="200"
	step="10"
	title="Flowbite Svelte Illustrations"
	icons={DarkIcons}
	threeTabs={false}
/>
</div>