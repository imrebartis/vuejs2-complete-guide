<template>
    <div>
        <app-stock v-for="stock in stocks"></app-stock>
    </div>     
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        data() {
            return {
                stocks: [
                    {id: 1, name: 'Tesla', price: 110},
                    {id: 1, name: 'Google', price: 230},
                    {id: 1, name: 'Apple', price: 250},
                    {id: 1, name: 'Twitter', price: 9}
                ]
            }
        },
        components: {
            appStock: Stock
        }
    }
</script>

