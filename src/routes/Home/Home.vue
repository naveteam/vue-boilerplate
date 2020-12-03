<template>
    <div>
        <Button />
        <Container />
        <Picture />
        <Input />
        <Link />
        <Loader />
    </div>
</template>

<script>

import Button from '../../components/Button'
import Container from '../../components/Container'
import Picture from '../../components/Picture'
import Input from '../../components/Input'
import Link from '../../components/Link'
import Loader from '../../components/Loader'

export default {
    name: 'Home',
    components: {
        Button,
        Container,
        Picture,
        Input,
        Link,
        Loader
    }
}
</script>