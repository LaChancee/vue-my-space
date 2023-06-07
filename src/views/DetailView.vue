<script >
export default {
  name: 'AstreDetailComponent',
  computed: {
    astres() {
      const astreId = this.$route.params.id;
      return this.$store.state.astres.find(astre => astre.id === astreId)
    }
  },
  created() {
    this.$store.commit('getAstres');
  }

}



</script>

<template>

  <div class="bg-slate-900 h-screen overflow-hidden">
    <div class="bg-gradient-to-b from-violet-600/[.15] via-transparent ">
      <div class="max-w-3xl py-10 text-center mx-auto">
        <h1 class="flex gap-3 font-medium text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Voici les détails de <div>
          <span class="hover:text-orange-600 transition"> {{astres.name}}</span>
          <img alt="Soulignement" class="text-gray-200 w-full h-1/3  " :src="require('../assets/underline.svg')">

        </div>
        </h1>
      </div>
      <div class="grid grid-cols-2 px-12 ">
        <div class="grid place-content-start h-screen">
          <img v-if="astres.isPlanet" alt="Image de planète" class="w-10/12 mb-36" :src="require('../assets/earth.svg')">
          <img v-else alt="Image de astres" class="w-8/12 mb-36" :src="require('../assets/Planet.png')">
        </div>
        <div class="grid ">
          <div class="grid place-content-start h-fit p-6 border border-2 border-gray-200 rounded-2xl hover:border-orange-400 transition">
            <span class="text-gray-200  text-2xl">Nom: <span class="font-medium">{{astres.name}}</span></span>
            <span class="text-gray-200  text-2xl">Nom anglais: <span class="font-medium">{{astres.englishName}} </span> </span>
            <span v-if="astres.isPlanet" class="text-gray-200 font-semibold text-2xl">Cet astre est une planète fascinante.</span>
            <span v-else class="text-gray-200  text-2xl">Cet astre n'est pas une planète, mais il reste captivant.</span>
            <span  class="text-gray-200  text-2xl">La gravité sur cet astre est d'environ <span class="font-medium">{{ astres.gravity }}</span>.</span>
            <span  class="text-gray-200  text-2xl">{{astres.name}} a une masse d'environ <span class="font-medium">{{ astres.mass.massValue }} kg</span>.</span>
            <span  class="text-gray-200  text-2xl">Le volume de {{astres.name}} est d'environ <span class="font-medium">{{ astres.vol.volValue }} km³</span>.</span>

            <div class="text-center py-6 justify-self-center ">
              <router-link to="/astres" class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 " >
                <a>
                  Retourner voir les astres
                </a>
                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </router-link>
            </div>
          </div>

        </div>



      </div>
    </div>
  </div>

</template>

<style scoped>

</style>