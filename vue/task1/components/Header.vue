<template>
    <div class="navbar">
        <nuxt-link to="/"> Home </nuxt-link>
        <nuxt-link to="/products"> Product </nuxt-link>
    </div>
</template>


<style scoped>
    .navbar {
        overflow: hidden;
        background-color: DodgerBlue;
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        font-size: 100%;
        font-style: normal;
        font-family: "Times New Roman";
        }

        /* Style the navigation bar links */
        .navbar a {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;
        }

        /* Right-aligned link */
        .navbar a.right {
        float: right;
        }

        /* Change color on hover */
        .navbar a:hover {
        background-color: rgb(102, 153, 255);
        color: black;
        }

        /* Active/current link */
        .navbar a.active {
        background-color: #666;
        color: white;
        }

</style>





