<template>
  <div>
    <div>
      <Header />
    </div>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
  import Header from '~/components/Header'

  export default{
    components: {
      Header
    },
    
    middleware: 'log',
  }
</script>

<style scoped>
  html {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body{
    margin: 0px;
  }

</style>
