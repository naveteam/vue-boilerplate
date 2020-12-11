<template>
    <Container>
        <Column class="center">
            <Input label="Email" placeholder="exemplo@exemplo.com" type="email"/>
            <Input label="Senha" placeholder="******" type="password"/>
        </Column>
    </Container>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style lang="scss" scoped>
    .center {
        justify-content: center !important;
    }
</style>