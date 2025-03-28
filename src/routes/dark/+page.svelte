<script lang="ts">
	import { IconPage, filterIconsByKeyword } from 'runes-webkit';
	import IllustPage from '../utils/IllustPage.svelte';
	import * as icons from '$lib';
	import { A404NotFoundShoppingDark } from '$lib';

	const keywordsToInclude = 'Dark';
	const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
	let searchTerm = $state('');

	let filteredEntries = $derived(
		Object.entries(keyIcons).filter(([name]) => {
			return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
		})
	);
</script>

<IllustPage
	minSize="100"
	defaultSize="140"
	maxSize="200"
	step="10"
	title="Dark Illustrations"
	classDiv3="grid lg:grid-cols-3 grid-cols-2 gap-20 place-items-center "
	icons={keyIcons}
	threeTabs={false}
	class="bg-gray-900 py-20"
/>
