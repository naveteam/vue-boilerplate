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

  .column {
    width: 100%;        
    display: flex;
    flex-direction: column;
  }

  .row {
    width: 100%;        
    display: flex;
  }

  .container {
    width: 100%;
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

  .button {
    padding: 8px 4px;
    @media (min-width: 1200px) {
      width: 30%;
    }
  }

  .input-container {
    
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
