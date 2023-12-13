<template>
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
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.post {
  padding: 15px;
  border: 2px solid green;
  margin-top: 15px;
}
</style>