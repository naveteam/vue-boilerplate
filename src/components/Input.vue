<template>
    <Column class="input-container">
        <Typography class="label">{{label}}</Typography>
        <input :placeholder="placeholder" :type="type" />
    </Column>
</template>

<script>
export default {
    props: ['label', 'placeholder', 'type']
}
</script>

<style lang="scss" scoped>
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    .label {
      font-size: 0.8em;
    }

    input {
      padding: 8px 4px;
      @media (min-width: 1200px) {
        width: 30%;
      }
    }
  }

</style>