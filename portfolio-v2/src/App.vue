<template>
  <HomeCard/>
  <Backgroundapp/>
</template>

<script>

import HomeCard from './components/HomeCard.vue'


export default {
  name: 'App',
  components: {
    HomeCard,
},
mounted(){

}
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(21, 241, 87);
  margin: 0;
  padding: 0;
}

</style>
