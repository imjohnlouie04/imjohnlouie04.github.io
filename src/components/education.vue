<template>
  <ul class="education">
    <li><h4 class="label">{{ title }}</h4></li>
    <li v-for="(e,i) in data" :key="i">
      <span>{{ e.course }}</span>
      <span>{{ e.school }}</span>
      <span>{{ e.yearStart }} - {{ e.yearEnd }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Education',
  props: {
    data: {
      type: Array,
    },
    title: {
      type: String,
      default: 'Education Attainment'
    }
  }
}
</script>

<style lang="scss" scoped>
$class: '.education';

#{$class} {
  padding: $padding 0;
  border-bottom: 1px solid #fff;
  list-style: none;
  margin: 0;

  li {
    margin-bottom: 10px;
  }

  .label {
    text-transform: uppercase;
  }

  span {
    display: block;

    &:last-child {
      font-size: 80%;
    }
  }

  a {
    color: #fff;
  }
}
</style>