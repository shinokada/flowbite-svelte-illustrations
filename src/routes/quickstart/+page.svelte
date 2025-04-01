<script lang="ts">
	import {
		removeHyphensAndCapitalize,
		BellActiveAltOutline,
		InfoCircleOutline,
		cards,
		info,
		H2,
		HighlightCompo
	} from 'runes-webkit';
	import { A, P } from 'svelte-5-ui-lib';
	import { CreditCardPaymentReceipt } from '$lib';

	const modules = import.meta.glob('./md/*.md', {
		query: '?raw',
		import: 'default',
		eager: true
	});

	const brand = {
		title: `${removeHyphensAndCapitalize(__NAME__)}`,
		description: `${__DESCRIPTION__}`,
		Icon: BellActiveAltOutline,
		icon_class: 'text-blue-500'
	};

	const filteredCards = [brand, ...cards];

	const originalSource = {
		title: 'Original source',
		description: `${__ORIGINAL_SOURCE_NAME__}`,
		Icon: InfoCircleOutline,
		href: `${__ORIGINAL_SOURCE_URL__}`,
		icon_class: 'text-orange-500'
	};
	const license = {
		title: 'License',
		description: 'Released under the MIT License.',
		Icon: InfoCircleOutline,
		href: `https://github.com/shinokada/${__NAME__}/blob/main/LICENSE`,
		icon_class: 'text-lime-500'
	};

	const newInfo = [originalSource, license, ...info];
	/*eslint no-undef: "off"*/
	const pkg = {
		pkgName: __NAME__,
		pkgVersion: __VERSION__,
		repoUrl: __GITHUBURL__,
		runaticsVersion: __RUNATICS_VERSION__,
		runesMetaTagsVersion: __RUNES_METATAGS_VERSION__,
		svelteVersion: __SVELTE_VERSION__,
		svelteKitVersion: __SVELTEKIT_VERSION__,
		svelte5uilibVersion: __SVELTE_5_UI_LIB_VERSION__,
		svelteRuneHighlight: __SVELTE_RUNE_HIGHLIGHT_VERSION__,
		viteVersion: __VITE_VERSION__
	};
</script>

<div class="mx-auto mt-8 h-full max-w-7xl overflow-y-auto px-8 pb-20">
	<h1 class="my-8 flex justify-center">{removeHyphensAndCapitalize(__NAME__)}</h1>

	<H2>Installation</H2>
	<HighlightCompo
		class="max-w-7xl"
		codeLang="ts"
		code={modules['./md/installation.md'] as string}
	/>

	<H2>Requirements</H2>
	<HighlightCompo
		class="max-w-7xl"
		codeLang="ts"
		code={modules['./md/requirements.md'] as string}
	/>

	<H2>How to use</H2>
	<HighlightCompo class="max-w-7xl" codeLang="ts" code={modules['./md/how-to-use.md'] as string} />

	<H2>Types</H2>
	<HighlightCompo class="max-w-7xl" codeLang="ts" code={modules['./md/types.md'] as string} />

	<H2>Props</H2>
	<HighlightCompo class="max-w-7xl" codeLang="ts" code={modules['./md/props.md'] as string} />

	<H2>Accessibility</H2>
	<HighlightCompo
		class="max-w-7xl"
		codeLang="ts"
		code={modules['./md/accessibility.md'] as string}
	/>

	<P>Checkout the following in the developer't tool.</P>
	<CreditCardPaymentReceipt
		title={{ id: 'my-title', title: 'Your title here' }}
		desc={{ id: 'my-desc', desc: 'Description here' }}
	/>

	<HighlightCompo
		class="max-w-7xl"
		codeLang="ts"
		code={modules['./md/title-output.md'] as string}
	/>
</div>
