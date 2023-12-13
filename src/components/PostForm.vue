<template>
  <form @submit.prevent>
    <h4>Create a new post</h4>
    <input 
      v-model="post.title" 
      type="text" 
      class="input" 
      placeholder="Add Title">
    <input 
      v-model="post.body" 
      type="text" 
      class="input" 
      placeholder="Add Text">
    <MainButton class="btn primary" @click="createPost">Add new post</MainButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      if(this.post.title && this.post.body) {
        this.post.id = Date.now();
        this.$emit('create', this.post);
        this.post = {
          title: '',
          body: ''
        }
      }
    }
  }
}
</script>

<style>

form {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}
.input {
  border: 1px solid green;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>