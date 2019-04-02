<template>
  <Layout class="home">
    <ul>
      <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
        <router-link :to="node.path">
          <h2 v-html="node.title"/>
        </router-link>
        <span v-html="node.date"/>
        <div v-html="node.description"/>
      </li>
    </ul>

     <Pager :info="$page.allBlogPost.pageInfo"/>
      <Card />
  </Layout>



</template>


<page-query>
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
        title
        path
      }
    }
  }
  }
</page-query>








<script>
import { Pager } from "gridsome";
import Card from '~/components/Card.vue'
export default {
  components: {
    Pager,
     Card
  }
};
</script>

<style scoped

ul nav a {
  padding:
}

  .home >>> .heading {
    margin-bottom: 70px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 20px;
  }

  ul li a h2 {
    margin-bottom: 10px;
  }

  span {
    font-size: 80%;
    padding: 0;
  }

  ul li p:first-child {
    margin-top: 3px;
  }

  ul li p {
    margin: 0;
    line-height: 1.5;
  }
</style>