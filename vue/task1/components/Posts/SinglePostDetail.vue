<template>
    <article class="single-post-preview">
        <div class="post-thumbnail" 
                :style="{backgroundImage: 'url(' + thumbnail + ')'}"> </div>
        <div class="post-content"> 
            <h2> {{title}} </h2>
            <p> {{content}} </p>
        </div>
    </article>
</template>


<style scoped>
    .single-post-preview {
        display:block;
        border: 1px solid floralwhite;
        box-shadow: 0 2px 2px floralwhite;
        background-color: white;
        width: 80%;
        margin-top: 5%;
        margin-left: 10%;
        margin-right: 10%;

    }

    .post-thumbnail {
        width: 100%;
        height: 300px;;
        background-position: center;
        background-size: cover;
        margin-bottom: 5%
    }

    .post-content {
        padding: 10px;
        text-align: center;
        background-color:gainsboro;
        height:auto;
    }

    .post-content h2{
        font-size: 36px;
        text-shadow: 2px 1px grey;
    }

    .post-content p{
        text-align: justify;
        padding-left: 5%;
        padding-right: 5%;
    }

</style>


<script>
export default {
    props: {
        title: {   
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        thumbnail: {   
            type: String,
            required: true
        }
    },

}
</script>