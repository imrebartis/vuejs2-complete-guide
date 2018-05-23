<template>
    <div class="col-xs-12 col-sm-6">
                <p v-if="!server">Please select a server</p>
                <p v-else>Server # {{server.id}} selected, Status: {{server.status}}</p>
                <hr>
                <button @click="resetStatus">Change to normal</button>
    </div>
</template>
<style scoped>
    div {
        border: 1px solid red;
    }
</style>
<script>
    import {serverBus} from '../../main'

    export default {
        data: function() {
            return {
                server: null
            }
        },
        methods: {
            // object is a reference type, that's why we don't need to pass this back to servers
            // (each server is an object, see Servers.vue data function)
            resetStatus(){
                this.server.status = 'Normal'
            }
        },
        created() {
            serverBus.$on('serverSelected', (server) => {
                this.server = server
            });

        }
    }
</script>