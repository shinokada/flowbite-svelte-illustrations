<script lang="ts">
  import { filterIconsByKeyword } from 'runes-webkit';
  import IllustPage from '../utils/IllustPage.svelte';
  import * as icons from '$lib';

  const keywordsToInclude = 'Dark';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IllustPage
  minSize="100"
  defaultSize="140"
  maxSize="200"
  step="10"
  title="Dark Illustrations"
  icons={keyIcons}
  threeTabs={false}
/>
