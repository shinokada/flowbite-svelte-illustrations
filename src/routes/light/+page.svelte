<script lang="ts">
  import IllustPage from '../utils/IllustPage.svelte';
  import * as icons from '$lib';
  import { excludeIconsByKeyword } from '../utils/helper';

  const keywordsToInclude = 'Dark';
  const keyIcons = excludeIconsByKeyword(icons, keywordsToInclude);
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
