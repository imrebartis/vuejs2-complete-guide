<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-header></app-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
// local components
import Header from './components/Shared/Header.vue'
import Footer from './components/Shared/Footer.vue'
import Servers from './components/Server/Servers.vue'
import ServerDetails from './components/Server/ServerDetails.vue'


export default {
    components: {
        appHeader: Header,
        'app-footer': Footer,
        Servers,
        'app-server-details': ServerDetails
    }
}
</script>

<style>

</style>
