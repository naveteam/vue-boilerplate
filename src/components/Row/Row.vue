<template>
    <div class="row">
        <slot />
    </div>
</template>

<script>
export default {
    name: "Row"
}
</script>

<style lang="scss" scoped>
    .row {
        width: 100%;        
        display: flex;
    }
</style>