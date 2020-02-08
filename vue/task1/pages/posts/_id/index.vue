<template>
    <div class="single-post-page">
        <section class="post">
            <h1> {{loadedPost.title}}</h1>
            <div class="post-details">
                <div> {{loadedPost.updatedDate}} </div>
                <div> Written by: {{loadedPost.author}}</div>
            </div>
            <p class="post-content"> 
                aku adalah anak gembala selalu riang
                serta gembira, karena aku rajin bekerja + {{loadedPost.content}}
            </p>
        </section>
    </div>
</template>

<script>
export default {
    asyncData(context)  {
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
    });
  }
}
</script>

