<template>
    <section class="post-list"> 
        <PostPreview 
            v-for="post in posts"
              :key="post.id"
              :id="post.id"
              :is-admin="isAdmin"
              :title="post.title"
              :contentPreview="post.contentPreview"
              :content="post.content"
              :thumbnail="post.thumbnail"/>
    </section>
</template>


<script>
import PostPreview from '@/components/Posts/PostPreview.vue'

export default {
  components: {
    PostPreview
  },

  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts:{
      type: Array,
      required: true
    },

  }
}
</script>


<style scoped>
.post-list {
  margin-top: 50px;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>