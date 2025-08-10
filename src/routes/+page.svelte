<script lang="ts">
  import { filterIconsByKeyword } from 'runes-webkit';
  import IllustPage from './utils/IllustPage.svelte';
  import * as icons from '$lib';
  import { excludeIconsByKeyword } from './utils/helper';

  const keywordsToFilter = 'Dark';
  const DarkIcons = filterIconsByKeyword(icons, keywordsToFilter);
  const LightIcons = excludeIconsByKeyword(icons, keywordsToFilter);
</script>

<div class="mx-auto max-w-7xl">
  <h1>Flowbite Svelte Illustrations</h1>
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
</div>
