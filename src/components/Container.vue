<template>
  <div class="column container"><slot /></div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;        
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin-right: auto;
    margin-left: auto;
    padding: 20px;
    max-width: 360px;

    @media (min-width: 1200px) {
      max-width: 1200px + 80px;
      padding: 40px;
    }
  }
</style>