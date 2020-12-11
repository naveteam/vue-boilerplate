<template>
  <a :href="href" :target="target">{{ text }}</a>
</template>

<script>
export default {
    props: ['href', 'text', 'target']
}
</script>

<style lang="scss" scoped>

</style>