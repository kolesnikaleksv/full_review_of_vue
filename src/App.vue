<template>
  <Liker :likes="likes" :dislikes="dislikes"/>
  <hr/>
  <MainButton class="btn primary" @click="openPopup">
    Create new post
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

export default {
  components: {
    PostForm, PostList, Liker
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
      visibleDialog: true,
      posts: [
        {id: 1, title: 'vue', body: 'asdflasjd asdfj;askdjf asdfasdf asdf'},
        {id: 2, title: 'react', body: 'lorem asdfasdfas asdfasd afsd'},
        {id: 3, title: 'angular', body: 'asdflasjd asdfj;askdjf '}
      ]
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
    openPopup() {console.log('hello')
      this.visibleDialog = true
    }
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