<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                   <h2 slot="title">{{quoteTitle}}</h2>
                   <p slot="content">A marvelous quote.</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    export default {
        data: function() {
            return {
                quoteTitle: 'La quota'
            }
        },
        components: {
            appQuote: Quote
        }
    }
</script>

<style scoped>
    h2 {
        color: red;
    }
</style>
