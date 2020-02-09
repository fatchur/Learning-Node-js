<template>
    <div class="navbar">
        <nuxt-link to="/"> Home </nuxt-link>
        <nuxt-link to="/products"> Product </nuxt-link>
        <nuxt-link to="/posts"> Posts </nuxt-link>
        <nuxt-link to="/admin"> Admin </nuxt-link>
        <nuxt-link to="/about"> About Us </nuxt-link>
    </div>
</template>


<style scoped>
    .navbar {
        overflow: hidden;
        background-color: #161B21;
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        font-size: 100%;
        font-style: normal;
        }

        /* Style the navigation bar links */
    .navbar a {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 20px 20px;
        text-decoration: none;
        font-size: 16px;
        }

    /* Right-aligned link */
    .navbar a.right {
        float: right;
        }

    /* Change color on hover */
    .navbar a:hover {
        background-color: #F4A950;
        color: black;
        }

    /* Active/current link */
    .navbar a.active {
        background-color: #666;
        color: white;
        }

</style>





