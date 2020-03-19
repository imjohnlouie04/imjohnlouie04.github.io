<template>
  <ul class="skills">
    <li><h4 class="label">{{ title }}</h4></li>
    <li v-for="(s,i) in data" :key="i">
      <span>{{ s.name }}</span>
      <div :data-ratings="s.ratings">

      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    data: {
      type: Array,
    },
    title: {
      type: String,
      default: 'Skills'
    }
  }
}
</script>

<style lang="scss" scoped>
$class: '.skills';

#{$class} {
  padding: $padding 0;
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

  [data-ratings] {
    position: relative;
    height: 7px;
    margin-top: 3px;
    background-color: rgba(#fff,.25);
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      background-color: #fff;
      border-radius: 10px;
    }
  }

  [data-ratings="1"] {

    &:before {
      width: 20%;
    }
  }

  [data-ratings="2"] {
    
    &:before {
      width: 40%;
    }
  }

  [data-ratings="3"] {
    
    &:before {
      width: 60%;
    }
  }

  [data-ratings="4"] {
    
    &:before {
      width: 80%;
    }
  }

  [data-ratings="5"] {
    
    &:before {
      width: 100%;
    }
  }
}
</style>