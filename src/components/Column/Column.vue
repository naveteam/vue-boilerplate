<template>
    <div class="column">
        <slot />
    </div>
</template>

<script>
export default {
    name: "Column"
}
</script>

<style lang="scss" scoped>
    .column {
        width: 100%;        
        display: flex;
        flex-direction: column;
    }
</style>