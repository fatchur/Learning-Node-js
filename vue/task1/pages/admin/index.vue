<template>
    <div class="admin-page">
        <section class="new-post">  
            <AppButton @click="$router.push('/admin/new-post')"> Create Post </AppButton>
        </section>
        <section class="existing-post">
            <h1> existing posts </h1>
            <PostList :isAdmin='isAdmin'
                      :posts='loadedPosts'/>
        </section>
    </div>
</template>


<script>
import PostList from '@/components/Posts/PostList.vue'
import AppButton from '@/components/UI/AppButton.vue'

export default {
    components: {
        PostList,
        AppButton
    },

    data()  {
      return{
        isAdmin:true,
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
          thumbnail:'https://ichef.bbci.co.uk/news/660/cpsprodpb/B7B0/production/_101542074_gettyimages-956391468.jpg'}],
      }
    }
}
</script>


<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>