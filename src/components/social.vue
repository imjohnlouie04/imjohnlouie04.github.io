<template>
  <ul class="social">
    <li><h4 class="label">{{ title }}</h4></li>
    <li v-for="(s,i) in data" :key="i">
      <span>{{ s.socialName }}:</span>
      <span><a :href="s.link" target="_blank">{{ s.link }}</a></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Social',
  props: {
    data: {
      type: Array,
    },
    title: {
      type: String,
      default: 'Website & Social Links'
    }
  }
}
</script>

<style lang="scss" scoped>
$class: '.social';

#{$class} {
  padding: $padding 0;
  border-bottom: 1px solid #fff;
  list-style: none;
  margin: 0;

  li {
    margin-bottom: 10px;
    overflow-wrap: break-word;
  }

  .label {
    text-transform: uppercase;
  }

  span {
    display: block;
  }

  a {
    color: #fff;
  }
}
</style>