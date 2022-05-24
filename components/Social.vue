<template>
  <a
    target="_blank"
    class="inline-block text-gray-400 border-0 hover:text-gray-600"
  >
    <svg
      role="img"
      :aria-label="label"
      class="inline-block fill-current"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
      viewBox="0 0 24 24"
      height="24"
      width="24"
    >
      <g transform="matrix(1,0,0,1,0,0)">
        <path
          :d="svg"
          stroke="none"
          stroke-width="0"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  </a>
</template>

<script>
export default {
  props: [
    'label',
    'svg'
  ],
}
</script>
