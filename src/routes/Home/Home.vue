<template>
    <section>
        <p>        
            Your vue app
        </p>
    </section>
</template>

<script>

import { setAccessToken } from '../../helpers/auth'

export default {
    name: 'Home',
    mounted() {
        setAccessToken()
    }
}
</script>

<style lang="scss" scoped>
    section {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            font-size: 50px;
        }
    }

</style>