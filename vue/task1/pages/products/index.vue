<template>
    <section class="container">
        <div class="product">
            <input type="text" v-model="pid">
            <button @click="onLoadId"> Load Product </button>
        </div>
    </section>
</template>


<script>
export default{
    data(){
        return {pid:'intial'}
    },
    methods: {
        onLoadId() {
            this.$router.push('/products/' + this.pid)
        }
    }
}
</script>

<style scoped>
    .product{   
        margin-top: 5%;
    }
</style>