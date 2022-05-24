<template>
  <div class="p-6 flex md:flex items-center justify-center min-h-screen">
    <div class="text-center">
      <h1 class="text-9xl font-semibold mb-12" v-if="error.statusCode === 404">404</h1>
      <h1 class="text-4xl mb-12" v-else>Internal Server Error</h1>

      <p class="mb-4">We could not find what you were looking for.</p>

      <NuxtLink to="/">Back to the home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || '<%= messages.client_error %>'
    }
  },
  head () {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
        }
      ]
    }
  }
}
</script>
