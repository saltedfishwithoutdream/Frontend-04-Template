<template>
    <p>{{gretting}} World</p>
</tempalte>

<script>
    module.exports = {
        data: function () {
            return {
                greeting: 'Hello'
            }
        }
    }
</script>

<style scoped>
    p {
        font-size: 2rem;
        text-align: center;
    }
</style>