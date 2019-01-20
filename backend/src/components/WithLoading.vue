<template>
  <div class="with-loading">
    <slot v-if="!isLoading"></slot>
    <div v-else>Loading..</div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style>

</style>
