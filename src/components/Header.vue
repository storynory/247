<template>
   <header class="p-4 ">
		<g-link class="box center" to="/">
		  <h1 class="text-5xl">
		    {{ $static.metaData.siteName }} <span class="bubble">247</span>
		  </h1>
		</g-link>
		<div class="space">
		<div class=" bg-green p-4">
		A Podcast That Interviews Leading Philosophers About Pressing Moral and Political Issues.
		</div>
		</div>
	<p class="text-gray">this text should be gray"</p>	
   </header>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<style>


h1 {
	font=family: comfortaa, cursive;
	font-weight: 400;
	color: #39d5b6;
}

.bubble {
	font-size: 0.75em;
	padding-right: 1em;
	position: relative;
	font-style: italic;
	border-radius: 360px;
	background: #63dec5;
	padding-top: 13px;
	padding-bottom: 13px;
	padding-left: 27px;
	color: black;
}

.bubble:after {
	display: block;
	content:"";
	position: absolute;
	background: #63dec5;
	bottom: -30px;
    left: 30px;
    width: 15px;
    height: 15px;
    border-radius: 15px;
}


.bubble:before {
	bottom: -20px;
    left: 50px;
    width: 30px;
    height: 30px;
    display: block;
	content:"";
	position: absolute;
	background: #63dec5;
	border-radius:15px;
	
}

.strap {
	background: #63dec5;
	padding: 12px;

}

.space {
	padding-top: 50px;
}

.center {
	text-align: center;
}

</style>