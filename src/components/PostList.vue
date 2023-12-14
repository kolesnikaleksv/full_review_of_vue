<template>
   <div>
    <h3>List of posts</h3>
    <PostItem 
      v-if="posts.length > 0"
      v-for="post in posts" 
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"/>
    <h2 v-else>There are not post here. Create your one</h2>
   </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>