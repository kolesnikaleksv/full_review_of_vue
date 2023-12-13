<template>
   <div class="post">
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
    post: {
      type: Object,
      required: true,
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