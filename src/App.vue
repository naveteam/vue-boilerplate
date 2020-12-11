<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Montserrat";
  }

  button, a {
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }
</style>
