<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-header></app-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
// local components
import Header from './Header.vue'
import Footer from './Footer.vue'
import Servers from './Servers.vue'
import ServerDetails from './ServerDetails.vue'


export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-servers': Servers,
        'app-server-details': ServerDetails
    }
}
</script>

<style>

</style>
