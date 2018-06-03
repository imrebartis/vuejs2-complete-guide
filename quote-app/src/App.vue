<template>
    <div class="container">
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
    export default {
        data: function() {
            return {
                quotes: [
                    "I'm just a piccolo"
                ],
                maxQuotes: 10
            }
        },
        components: {
         appQuoteGrid: QuoteGrid
     }
    }
</script>

<style>
</style>
