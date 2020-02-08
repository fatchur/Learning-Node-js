<template>
    <div class="posts-page">
        <PostList :isAdmin="isAdmin" :posts="loadedPosts" />
    </div>
</template>


<script>
import PostList from '@/components/Posts/PostList.vue'

export default {
    components: {
        PostList
    },

    fetch(context){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(
                {isAdmin:false,
                    loadedPosts: [
                    { id:'1', 
                        title: 'post 1', 
                        previewText: 'This is post 1', 
                        thumbnail:'https://ichef.bbci.co.uk/news/660/cpsprodpb/B7B0/production/_101542074_gettyimages-956391468.jpg'},
                    { id:'2', 
                        title: 'post 3', 
                        previewText: 'This is post 2', 
                        thumbnail:'https://ichef.bbci.co.uk/news/660/cpsprodpb/B7B0/production/_101542074_gettyimages-956391468.jpg'},
                    { id:'3', 
                        title: 'post 3', 
                        previewText: 'This is post 3', 
                        thumbnail:'https://ichef.bbci.co.uk/news/660/cpsprodpb/B7B0/production/_101542074_gettyimages-956391468.jpg'}]
                });
                }, 500);
        }).then(data=>{
            // fetch can't integrate with vue component
            context.store.dispatch('setPosts', data.loadedPosts);
            //context.store.dispatch('setAdmin', data.isAdmin) // set by default in storage 
        }).catch(()=>{
            context.error(new Error())
        })
    },

    computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts;
        },
        isAdmin()   {
            console.log(this.$store.getters.isAdmin);
            return this.$store.getters.isAdmin;
        }
    }

}
</script>


<style scoped>
.post-page{ 
    margin-top: 100px;
}
</style>