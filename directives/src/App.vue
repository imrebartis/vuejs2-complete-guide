<template>
    <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>built-in directives</h1>
                        <p v-text="'some text'"></p>
                        <p v-html="'<strong>some heavy text</strong'"></p>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>custom directives</h1>
                        <p v-highlight:background="'red'">color this</p>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>
