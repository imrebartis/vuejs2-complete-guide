<template>
    <div>
        <h3>New quote</h3>
        <button @click="counter++">increase</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 0
            }
        },
        destroyed() {
            console.log('Destroyed')
        },
        deactivated() {
            console.log('Deactivated')
        },
        activated() {
            console.log('Activated')
        }
    }
</script>

<style scoped>

</style>