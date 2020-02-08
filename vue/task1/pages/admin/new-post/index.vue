<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <AdminPostForm @submit="onSubmitted"/>
        </section>
    </div>
</template>


<script>
import axios from "axios"
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'

export default {

    components: {
        AdminPostForm
    },

    methods: {
      onSubmitted(postData) {
        console.log('=============== here')
        axios.post('https://task1-d2d88.firebaseio.com/post.json', postData)
          .then(result => console.log("-->" + result))
          .catch(e => console.log(e))
      }
    }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>