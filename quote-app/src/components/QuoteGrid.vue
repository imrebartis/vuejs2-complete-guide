<template>
    <div class="row">
      <!-- due to the native modifier app-quote will react to clicks on its native element
      from App.vue, i.e. app-quote-grid -->
        <app-quote v-for="(quote, index) in quotes" :key="quote" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
    </div>
</template>

<script>
import Quote from './Quote.vue'
    export default {
        props: ['quotes'],
        components: {
        appQuote: Quote
     },
     methods: {
       deleteQuote(index) {
         this.$emit('quoteDeleted', index)
       }
     }
    }
</script>

<style>

</style>
