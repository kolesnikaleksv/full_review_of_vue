<template>
  <Liker :likes="likes" :dislikes="dislikes"/>
  <hr/>
  <div class="tools">
    <div>
      <MainButton class="btn primary" @click="openPopup">
        Create new post
      </MainButton>
      <MainButton class="btn primary" @click="fetchPosts">
        fetch posts
      </MainButton>
    </div>
    <my-select 
      v-model="selectedSort"
      :options="sortOptions"
      />
  </div>
  <my-dialog v-model:show="visibleDialog">
    <PostForm @create="createPost"/>
  </my-dialog>
  <PostList 
    :posts="sortedPosts" 
    @remove="removePost"
    v-if="!isFetching"/>
  <h2 v-else>Loading...</h2>
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
      isFetching: true,
      posts: [],
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'Sort by name'},
        {value: 'body', name: 'Sort by text'},
      ],
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
    async fetchPosts() {
      try{
        this.isFetching = true;
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
        this.posts = [...this.posts, ...responce.data];
      } catch(e) {
        alert('Error')
      } finally {
        this.isFetching = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts(){
      return [...this.posts].sort((post1, post2) =>  post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    }
  },
  // watch: {
  //   selectedSort(newValue){
  //     this.posts.sort((post1, post2) => {
  //       return post1[newValue]?.localeCompare(post2[newValue])
  //     })
  //   }
  // }
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
.tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>