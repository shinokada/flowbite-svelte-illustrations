<script lang="ts">
  import { H2 } from 'runes-webkit';
  import { HighlightCompo } from 'svelte-rune-highlight';
  import { P } from 'flowbite-svelte';
  import { CreditCardPaymentReceipt } from '$lib';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<div class="mx-auto mt-8 h-full max-w-7xl overflow-y-auto px-8 pb-20">
  <h1 class="my-8 flex justify-center">Quickstart: Flowbite Svelte Illustrations</h1>

  <H2>Installation</H2>
  <HighlightCompo lang="ts" code={modules['./md/installation.md'] as string} />

  <H2>Requirements</H2>
  <HighlightCompo lang="ts" code={modules['./md/requirements.md'] as string} />

  <H2>How to use</H2>
  <HighlightCompo lang="ts" code={modules['./md/how-to-use.md'] as string} />

  <H2>Types</H2>
  <HighlightCompo lang="ts" code={modules['./md/types.md'] as string} />

  <H2>Props</H2>
  <HighlightCompo lang="ts" code={modules['./md/props.md'] as string} />

  <H2>Accessibility</H2>
  <HighlightCompo lang="ts" code={modules['./md/accessibility.md'] as string} />

  <P>Checkout the following in the developer't tool.</P>
  <CreditCardPaymentReceipt
    title={{ id: 'my-title', title: 'Your title here' }}
    desc={{ id: 'my-desc', desc: 'Description here' }}
  />

  <HighlightCompo lang="ts" code={modules['./md/title-output.md'] as string} />
</div>
