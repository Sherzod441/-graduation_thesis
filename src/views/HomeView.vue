<template>
    <div class="container">
        <Quiz></Quiz>
        <Footer></Footer>
    </div>
</template>

<script>
    
    import Quiz from '../components/QuizComponent.vue'
    import Footer from '../components/FooterComponent.vue'
    export default {
        components :
        {
            Quiz,
            Footer
        }
    }
</script>

<style scoped>

</style>