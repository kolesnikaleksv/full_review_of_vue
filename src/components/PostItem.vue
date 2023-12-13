<template>
   <div class="post">
    <div>
      <div>
        Post title: <strong>{{ post.title }}</strong>
      </div>
      <div>
        Post text: <strong>{{ post.body }}</strong>
      </div>
    </div>
      <MainButton class="btn danger">Delete post</MainButton>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid green;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.post__button {
  display: flex;
  align-items: center;
}
.danger {
  margin: 0;
}
</style>