<template>
    <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <app-server
                        v-for="server in servers"
                        :server="server"
                        :key="server"></app-server>
                </ul>
    </div>
</template>

<style scoped>
    div {
        border: 1px solid blue; 
    }
</style>

<script>
import Server from './Server.vue'
export default {
     data: function(){
         return {
             servers: [
                 {id: 1, status: 'Normal'},
                 {id: 2, status: 'Critical'},
                 {id: 3, status: 'Unknown'},
                 {id: 4, status: 'Normal'},

             ]
         }
     },
     components: {
         appServer: Server
     }
}

</script>