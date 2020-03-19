<template>
  <ul class="personal-info">
    <li>
      <h1>{{ data.name }}</h1>
      <p>{{ data.position }}</p>
    </li>
    <li>
      <div class="info">
        <p><i class="material-icons">location_on</i> {{ data.address }}</p>
        <p><i class="material-icons">phone</i> {{ data.contact }}</p>
        <p><i class="material-icons">email</i> {{ data.email }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Personal',
  props: {
    data: {
      type: Object,
    }
  }
}
</script>

<style lang="scss" scoped>
$class: '.personal-info';

#{$class} {
  padding: $padding 0;
  border-bottom: 1px solid lighten($theme-color, 50%);
  display: flex;
  align-items: center;

  .material-icons {
    margin-right: $padding - 5;
  }

  li {
    display: inline-block;
    width: 50%;
    margin-bottom: $padding;

    &:last-child {
      padding: 0 $padding * 3;

      .info {
        float: right;

        p {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  h1 {
    font-size: 3em;
    margin: 0;
    line-height: 1;
    text-transform: uppercase;

    + p {
      margin: 5px 0;
      text-transform: uppercase;
    }
  }
}
</style>