<template>
  <div class="content">
    <personal :data="$store.state.personal"></personal>
    <experience :data="$store.state.work"></experience>
    <activities :data="$store.state.activities"></activities>
  </div>
</template>

<script>
import personal from '@/components/personal'
import experience from '@/components/experience'
import activities from '@/components/activities'
export default {
  components: {
    personal,
    experience,
    activities
  },
}
</script>

<style lang="scss" scoped>
$class: '.content';

#{$class} {
  width: 100%;
  padding: $padding * 2;
  color: $theme-color;
}
</style>