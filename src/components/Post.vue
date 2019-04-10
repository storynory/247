<template>
  <div>
    <h2 class ="text-4xl text-green" v-html="post.title" />
    <g-image :src="post.image" width="600"  />
    <p v-html="post.excerpt" />
    <g-link :to="post.path">
      Read More
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>


h2 {
  font=family: comfortaa, cursive;
  font-weight: 400;
  color: #39d5b6;
}

</style>