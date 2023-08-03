<template>
  <div>
    <Navbar v-if="idMenu != 0" :idMenu="idMenu" :key="idMenu"></Navbar>
    <router-view @id-menu="setMenu($event)"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import { ref } from "vue"
export default {
  name: "App",
  components: {
    Navbar
  },
  setup() {
    const idMenu = ref(-1);

    function setMenu(id) {
      idMenu.value = id;
    }

    return{
      setMenu,
      idMenu
    }
  }
}
</script>

<!-- 
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
