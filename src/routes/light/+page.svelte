<script lang="ts">
	import { IconPage, filterIconsByKeyword } from 'runes-webkit';
	import IllustPage from '../utils/IllustPage.svelte';
	import * as icons from '$lib';
	import { A404NotFoundShoppingDark } from '$lib';
	import { excludeIconsByKeyword } from '../utils/helper';

	const keywordsToInclude = 'Dark';
	const keyIcons = excludeIconsByKeyword(icons, keywordsToInclude);
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
	title="Light Illustrations"
	icons={keyIcons}
	threeTabs={false}
/>
