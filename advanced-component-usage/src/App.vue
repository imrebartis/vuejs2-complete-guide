<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
               <hr>
               <p>{{selectedComponent}}</p>
               <component :is="selectedComponent">
                   <p>Default content</p>
               </component>
               <!-- <app-quote>
                   <h2 slot="title">{{quoteTitle}}</h2>
                   <p>A marvelous quote.</p>
               </app-quote> -->
               <hr>

            </div>
        </div>
    </div>
</template>

<script>
    import Author from './components/Author.vue'
    import New from './components/New.vue'
    import Quote from './components/Quote.vue'
    export default {
        data: function() {
            return {
                quoteTitle: 'La quota',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style scoped>
    h2 {
        color: red;
    }
</style>
