<template>
  <div class="p-6 flex items-center justify-center min-h-screen lg:p-0">
    <div class="md:flex">
      <img
        class="h-24 w-24 rounded-full border border-gray-200 md:h-32 md:w-32"
        src="~/assets/jordan-heale.jpg"
        v-bind:alt="this.$root.context.app.head.title"
      />

      <div class="mt-6 md:ml-6 md:mt-0">
        <h1 class="text-gray-800 text-2xl font-bold uppercase">
          {{ this.$root.context.app.head.title }}
        </h1>

        <div class="max-w-2xl md:text-justify">
          <Paragraph class="font-semibold">
            Hello, I'm {{ this.$root.context.app.head.title }}&mdash;a professional full stack web app developer
            currently based in <span class="whitespace-nowrap">Greater London, England,</span> with over 5 years of
            experience.
            <span class="font-normal">
              I specialise in <a href="https://laravel.com/" target="_blank">Laravel</a> and have a keen
              interest in infrastructure and cloud technology.
            </span>
          </Paragraph>

          <Paragraph>
            In a volunteer capacity I have contributed towards the encyclopedia
            <a href="https://pcgamingwiki.com" target="_blank" rel="nofollow">PCGamingWiki</a>&mdash;there I spent 3
            years as an administrator, and in that time built
            <a href="https://pcgw-assignments.herokuapp.com" target="_blank">PCGW Assignments</a> to manage and allocate
            press review codes for upcoming title releases.
          </Paragraph>

          <Paragraph>
            Outside of the web, but within the realm of tech, I also dabble in hosting video game servers and operated a
            relatively popular
            <a
              href="https://en.wikipedia.org/wiki/ARMA_2:_Operation_Arrowhead"
              target="_blank"
            >Arma 2: Operation Arrowhead</a> server back in 2019&mdash;creating a modular
            <a href="https://github.com/pridit/co40_Domination.Takistan" target="_blank">codebase</a> from scratch as
            part of it.
          </Paragraph>

          <Paragraph>
            When I'm not messing with tech I enjoy hiking, going for a long relaxing drive, and ensuring my
            responsibility as a pet owner is up to snuff.
          </Paragraph>

          <Paragraph>
            <a href="mailto:hello@pridit.co.uk">Feel free to get in touch</a>
          </Paragraph>
        </div>

        <p class="mt-8">
          <Social
            href="https://github.com/pridit"
            label="GitHub"
            svg="M12,0.28C5.373,0.278-0.002,5.649-0.004,12.276c-0.002,5.197,3.342,9.804,8.284,11.414h0.29 c0.551,0.034,1.026-0.385,1.06-0.936c0.003-0.041,0.003-0.083,0-0.124v-0.21c0-0.17,0-0.4,0-1.09c-0.02-0.132-0.092-0.251-0.2-0.33 c-0.118-0.095-0.272-0.132-0.42-0.1c-2.68,0.58-3.25-1.1-3.29-1.21C5.384,18.801,4.784,18.037,4,17.5 c-0.047-0.041-0.097-0.077-0.15-0.11c0.116-0.063,0.249-0.087,0.38-0.07c0.511,0.071,0.948,0.405,1.15,0.88 c0.804,1.4,2.572,1.913,4,1.16c0.15-0.065,0.258-0.2,0.29-0.36c0.038-0.463,0.236-0.897,0.56-1.23 c0.206-0.183,0.225-0.499,0.042-0.706c-0.081-0.091-0.191-0.149-0.312-0.164c-2.37-0.27-4.79-1.1-4.79-5.19 c-0.02-1.027,0.356-2.023,1.05-2.78C6.351,8.786,6.386,8.579,6.31,8.4C6.032,7.624,6.036,6.774,6.32,6 c0.924,0.164,1.791,0.559,2.52,1.15c0.122,0.086,0.277,0.112,0.42,0.07c0.893-0.242,1.814-0.367,2.74-0.37 c0.929,0.001,1.854,0.125,2.75,0.37c0.14,0.039,0.291,0.013,0.41-0.07c0.73-0.589,1.597-0.984,2.52-1.15 c0.272,0.77,0.272,1.61,0,2.38c-0.076,0.179-0.041,0.386,0.09,0.53c0.687,0.75,1.062,1.733,1.05,2.75c0,4.09-2.43,4.91-4.81,5.18 c-0.275,0.029-0.474,0.274-0.446,0.549c0.013,0.129,0.076,0.248,0.176,0.331c0.448,0.463,0.671,1.099,0.61,1.74v3.18 c-0.01,0.317,0.122,0.621,0.36,0.83c0.303,0.227,0.696,0.298,1.06,0.19c6.285-2.103,9.676-8.902,7.573-15.187 C21.71,3.592,17.147,0.296,12,0.28z"
          />

          <Social
            class="ml-4"
            href="https://www.linkedin.com/in/jordanheale/"
            label="LinkedIn"
            svg="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    meta: [
      { hid: 'og:title', name: 'og:title', content: 'Jordan Heale' },
    ]
  },
}
</script>
