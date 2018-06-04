<template>
    <div class="row">
      <form>
         <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
          <label>Quote</label>
          <!-- binding to the quote property from the data function -->
          <textarea class="form-control" rows="3" v-model="quote"></textarea>
         </div>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
          <label>Quote</label>
         <button class="btn btn-primary" @click.prevent="createNew">Add quote</button>
         </div>
      </form>
    </div>
</template>

<script>
import Quote from './Quote.vue'
    export default {
      data: function() {
          return {
            quote: ''
          }
      },
      methods: {
        createNew() {

        }
      }
    }
</script>

<style>

</style>
