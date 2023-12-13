<template>
  <button @click="addLike">Like</button>
  <button @click="addDisLike">dislike</button>
  <div>
    Our likes: <strong>{{ likes }}</strong>
  </div>
  <div>
    Our dislikes: <strong>{{ dislikes }}</strong>
  </div>
  <hr/>
  <form @submit.prevent>
    <h4>Create a new post</h4>
    <input 
      v-model="title" 
      type="text" 
      class="input" 
      placeholder="Add Title">
    <input 
      v-model="body" 
      type="text" 
      class="input" 
      placeholder="Add Text">
    <button class="btn" @click="createPost">Add new post</button>
  </form>
  <div class="post" v-for="post in posts">
    <div>
      Post title: <strong>{{ post.title }}</strong>
    </div>
    <div>
      Post text: <strong>{{ post.body }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
      posts: [
        {id: 1, title: 'vue', body: 'asdflasjd asdfj;askdjf asdfasdf asdf'},
        {id: 2, title: 'react', body: 'lorem asdfasdfas asdfasd afsd'},
        {id: 3, title: 'angular', body: 'asdflasjd asdfj;askdjf '}
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    addLike() {
      this.likes++
    },
    addDisLike() {
      this.dislikes++
    },
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }
      if(this.title && this.body) {
        this.posts.push(newPost)
        this.title = '';
        this.body = '';
      }
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
.post {
  padding: 15px;
  border: 2px solid green;
  margin-top: 15px;
}
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
</style>