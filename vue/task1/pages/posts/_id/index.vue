<template>
    <div class="single-post-page">
        <SinglePostDetail :title="loadedPost.title"
                           :author="loadedPost.author"
                           :thumbnail="loadedPost.thumbnail"
                           :content="loadedPost.content" />
    </div>
</template>

<script>
import axios from 'axios'
import SinglePostDetail from '@/components/Posts/SinglePostDetail.vue'


export default {
    components: {
        SinglePostDetail
    },

    asyncData(context)  {
        // the return of axios is also a promise
        var id = context.route.params.id
        return axios.get('https://task1-d2d88.firebaseio.com/post/' + id +'.json')
                    .then(res => {
                        return {loadedPost: res.data}
                    })
                    .catch(e => context.error(e))
        /*
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(
                {isAdmin:false,
                    loadedPost: 
                    { 
                        title: "Title of the post " + context.route.params.id,
                        updatedDate: "Last update on: " + new Date(),
                        author: "Fatchur",
                        content: "hahahsksudjdkdididndhdsisbs ",
                        thumbnail: "https://ichef.bbci.co.uk/news/660/cpsprodpb/B7B0/production/_101542074_gettyimages-956391468.jpg"},
                });
            }, 500);
        }).then(data=>{
            return data
        }).catch(()=>{
        context.error(new Error())
        }); */
    },
}
</script>

