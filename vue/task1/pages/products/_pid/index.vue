<template>
    <section class="container">
        <div>
            <h1>Product ID: {{$route.params.pid}} </h1>
        </div>
    </section>
</template>

<script>
export default{
    validate(data){
        console.log(data)
        return /^\d+$/.test(data.params.pid)
    }
}
</script>