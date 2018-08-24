<template>
    <div>
         <p>Counter is: {{ doubleCounter }}</p>
         <p>Number of clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            // pull out all the properties & methods we have in this object
            // & create separate key-value pairs for each of them
            // pre-requisites for ... to work: npm i --save-dev babel-preset-stage-2
            // & add  ["stage-2"] to .babelrc
            ...mapGetters([
            'doubleCounter',
            'stringCounter'
        ])}
    }
</script>