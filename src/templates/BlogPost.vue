<template>
  <Layout>
    <div class="article p-4">
      <header class="clearfix">
        <h1>{{ $page.blogPost.title }}</h1>
        <span>{{ $page.blogPost.date }}</span>
        </header>
        <g-image :src="$page.blogPost.image" width="600" fit="contain" />

     

      <div class="content" v-html="$page.blogPost.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      image (width: 600, height: 400, quality: 80)
    }
  }
</page-query>

<style>
  
</style>
