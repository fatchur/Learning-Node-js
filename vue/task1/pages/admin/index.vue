<template>
    <div class="admin-page">
        <section class="new-post">  
            <AppButton @click="$router.push('/admin/new-post')"> Create Post </AppButton>
        </section>
        <section class="existing-post">
            <h1> Existing Posts </h1>
            <PostList :isAdmin='isAdmin'
                      :posts='loadedPosts'/>
        </section>
    </div>
</template>


<script>
import PostList from '@/components/Posts/PostList.vue'
import AppButton from '@/components/UI/AppButton.vue'
import axios from 'axios'


export default {
    components: {
        PostList,
        AppButton
    },

    middleware: ['auth'],

    asyncData(context)  {
      // the return of axios is also a promise
      return axios.get(process.env.baseUrl + '/post.json')
                  .then(res => {
                      const postArray = []
                      for (const key in res.data) {
                          postArray.push({...res.data[key], id: key })
                      }; 
                      return {loadedPosts: postArray.slice(0, 6)}
                  })
                  .catch(e => context.error(e))
    },

    data()  {
      return{
        isAdmin:true,
      }
    },
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
    align-content: center
}
</style>