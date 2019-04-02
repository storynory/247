<template>
  <div class="card">
    {{ message }}
    <button class="btn" @click="onClick">
      Change
    </button>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go I AM A DOG :)'
    }
  }
}
</script>

<style>
.card {
  padding: 20px;
  background: #FFF;
}

.btn {
  padding: 5px;
  font-size: 12px;
}

</style>