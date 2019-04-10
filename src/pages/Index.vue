<template>
  <Layout>
    <ul class="list-reset p-4">
      <li class="list-reset" v-for="{ node } in $page.allBlogPost.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>

    <Pager :info="$page.allBlogPost.pageInfo"/>
  </Layout>
</template>

<page-query>
# Write your querypo or mutation her
  query Home ($page: Int) {
    allBlogPost (perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        id
        title
        path
        excerpt
        image (width: 600, height: 400, quality: 90)
      }
    }
  }
  }
</page-query>




<script>
import  Post   from '~/components/Post.vue';
import { Pager } from "gridsome";


export default {
  components: {
    Post,
    Pager
  }
};
</script>

<style >
$pink : blue;

.pink {
  color: $pink;
}

</style>



<style scoped>


</style>