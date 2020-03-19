<template>
  <div class="about-me">
    <h4 class="label">{{ $store.state.about.title }}</h4>
    <p>{{ $store.state.about.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'About-Me',
  props: {
    data: {
      type: Array,
    }
  }
}
</script>

<style lang="scss" scoped>
$class: '.about-me';

#{$class} {
  padding: $padding 0;
  border-bottom: 1px solid #fff;

  .label {
    text-transform: uppercase;
  }
}
</style>