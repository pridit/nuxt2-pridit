<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  font-weight: 600;
  border-bottom: 1px solid #444;
  border-style: dotted;
  @apply text-gray-700;
}

a:hover {
  color: #004792;
}

.dark a {
  @apply text-gray-500;
}

.dark a:hover, .dark button:hover {
  @apply text-gray-400;
}
</style>
