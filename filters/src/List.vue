<template>
    <div class="container">
        <div class="row">
            <div>
                <h1>Filters & Mixins</h1>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [ fruitMixin ]
    }
</script>

<style>
</style>
