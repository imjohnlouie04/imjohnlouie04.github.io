<template>
  <div class="work">
    <h4 class="label">{{ title }}</h4>
    <ul class="work-list">
      <li v-for="(w, i) in data" :key="i">
        <div class="wrap">
          <h4>{{ w.company }}</h4>
          <p>{{ w.location }}</p>
          <p>{{ w.yearStart }} - {{ w.yearEnd }}</p>
        </div>
        <div class="wrap">
          <h4>{{ w.position }}</h4>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Work',
  props: {
    data: {
      type: Array,
    },
    title: {
      type: String,
      default: 'Work Experience'
    }
  }
}
</script>

<style lang="scss" scoped>
$class: '.work';

#{$class} {
  padding: $padding 0;
  border-bottom: 1px solid lighten($theme-color, 50%);
  margin: -13px 0 0;

  .work-list {
    list-style: none;
    padding: 0; 

    li {
      display: flex;
      min-height: 70px;

      h4 {
        font-weight: 500;
        font-size: 18px;
        margin-top: 0;
        margin-bottom: $padding - 10;
      }

      p {
        color: rgba($theme-color, .75);
        margin: 0;
        font-size: 14px;
      }

      .wrap {
        position: relative;
        display: inline-flex;
        align-items: flex-start;
        flex-direction: column;
        width: 50%;
        padding-bottom: $padding;

        &:last-child {
          padding-left: $padding + 8;
          border-left: 1px solid lighten($theme-color, 50%);
          width: calc(50% - 1px);

          &:before {
            content: '';
            position: absolute;
            top: 7px;
            left: -5px;
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background-color: lighten($theme-color, 50%);
          }
        }
      }
    }
  }

  .label {
    text-transform: uppercase;
  }
}
</style>