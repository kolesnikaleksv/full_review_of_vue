<template>
  <Liker :likes="likes" :dislikes="dislikes"/>
  <hr/>
  <PostForm @create="createPost"/>
  <PostList :posts="posts" />
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

.btn {
  color: #42b983;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-decoration: none;
  text-transform: uppercase;
  margin-top: 15px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
}
.btn:hover {
    cursor: pointer;
    opacity: 0.8;
}
.btn:active {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}
</style>