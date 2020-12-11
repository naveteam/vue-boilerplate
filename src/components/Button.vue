<template>
  <button class="button"><slot /></button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .button {
    padding: 8px 4px;
    @media (min-width: 1200px) {
      width: 30%;
    }
  }
</style>