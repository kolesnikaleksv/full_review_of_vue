<template>
  <Liker :likes="likes" :dislikes="dislikes"/>
  <hr/>
  <MainButton class="btn primary" @click="openPopup">
    Create new post
  </MainButton>
  <MainButton class="btn primary" @click="fetchPosts">
    fetch posts
  </MainButton>
  <my-dialog v-model:show="visibleDialog">
    <PostForm @create="createPost"/>
  </my-dialog>
  
  <PostList 
    :posts="posts" 
    @remove="removePost"/>
    
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import Liker from '@/components/Liker.vue'
import axios from 'axios'

export default {
  components: {
    PostForm, PostList, Liker
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
      visibleDialog: false,
      posts: []
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.visibleDialog = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(item => item.id !== post.id)
    },
    openPopup() {
      this.visibleDialog = true
    },
    fetchPosts() {
       axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res => {
          this.posts = [...this.posts, ...res.data]
        })
    },
    // async fetchPosts() {
    //   try{
    //     const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
    //     this.posts = responce.data;
    //     console.log(this.posts)
    //   } catch(e) {
    //     alert('Error')
    //   }
    // }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 15px;
}
</style>