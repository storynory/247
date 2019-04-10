<template>
  <div class="container m-auto bg-white relative">

 <template>
  <Header />
</template>

    <slot/>
  </div>
</template>

<script>

import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  }
 
 
}
</script>


<style lang="css">


@tailwind preflight;

@tailwind components;

@tailwind utilities;

body {
  font-size: 18px;
  line-height: 1.5;
  padding: 0.5rem;
  @apply  bg-green
} 

a {
@apply no-underline
}
  
</style>
