<template>
    <nuxt-link :to="postlink" class="post-preview"> 
        <article>
            <div class="post-thumbnail" 
                 :style="{backgroundImage: 'url(' + thumbnail + ')'}"> </div>
            <div class="post-content"> 
              <h2> {{title}} </h2>
              <p> {{contentPreview}} </p>
            </div>
        </article>
    </nuxt-link> 
</template>


<style scoped>
    .post-preview {
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #ccc;
    background-color: white;
    width: 90%;
    }

    a {
    text-decoration: none;
    color: black;
    }

    @media (min-width: 850px) {
    .post-preview {
        width: 30%;
        height: 400px;
        margin: 20px;}
    }
    .post-thumbnail {
    width: 100%;
    height: 300px;
    background-position: center;
    background-size: cover;
    }

    .post-content {
    padding: 10px;
    text-align: center;
    }

    a:hover .post-content,
    a:active .post-content {
    background-color: #ccc;
    }
</style>


<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        isAdmin:{
            type: Boolean,
            required: true
        },
        title: {   
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        contentPreview: {   
            type: String,
            required: true
        },
        thumbnail: {   
            type: String,
            required: true
        }
    },

    computed: {
        postlink(){
            return this.isAdmin ? '/admin/' + this.id: '/posts/' + this.id
        }
    }
}
</script>