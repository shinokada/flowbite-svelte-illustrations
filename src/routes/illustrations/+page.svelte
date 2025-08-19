<script lang="ts">
  import { IconPage, filterIconsByKeyword } from 'runes-webkit';
  import * as icons from '$lib';

  const keywordsToInclude = 'Dark';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage
  minSize="20"
  defaultSize="40"
  maxSize="60"
  div3Class="grid lg:grid-cols-3 grid-cols-2 gap-4"
  icons={keyIcons}
  threeTabs={false}
  title="No Tabs"
/>
