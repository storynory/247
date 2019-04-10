Add components that will be imported to Pages and Layouts to this folder.
Learn more about components here: https://gridsome.org/docs/components

You can delete this file.

<template>
	<header class="header">

	  <g-link class="heading-link" :to="{ name: 'home' }">
	    <component :is="titleTag" class="heading">{{ config.siteName }}</component>
	  </g-link>
	</header>
</template>

<script>
export default {
  name: 'Header',
  }
</script>