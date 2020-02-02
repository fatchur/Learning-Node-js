<template>
    <section class="container">
        <div>
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