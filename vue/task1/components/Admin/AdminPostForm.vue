<template>
    <form class="admin-edit-form" @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>       
        <AppControlInput
                control-type="textarea"
                v-model="editedPost.content">Content</AppControlInput> 
         <AppControlInput
                control-type="textarea"
                v-model="editedPost.contentPreview">Content Preview</AppControlInput>

        <div class="edit-button"> 
            <AppButton type="submit">Save</AppButton> 
            <AppButton
                    type="button"
                    style="margin-left: 10px"
                    btn-style="cancel"
                    @click="onCancel">Cancel</AppButton>
        </div>
    </form>

</template>


<script>
import AppControlInput from '@/components/UI/AppControlInput.vue'
import AppButton from '@/components/UI/AppButton.vue'

export default {

    components: {
        AppControlInput,
        AppButton
    },

    props: {
        post: {
            type: Object,
            required: false
        }
    },

    data(){     
        return {
            editedPost: this.post ? {...this.post}
            :{
                author: '', 
                title: '',
                thumbnail: '',
                content: '',
                contentPreview: ''
            }
        }
    },

    methods: {
        onSave() {
            this.$emit('submit', this.editedPost)
            console.log(this.editedPost);
        },
        onCancel() {
            this.$router.push('/admin');
        }
    }

}
</script>

<style scoped>
.admin-edit-form    {
    width: 100px;
    margin: 5%;
    display: block
}

.edit-button{
    padding: 10px;
}
</style>