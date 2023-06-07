<template>
  <div class="bg-slate-900 min-h-screen">
    <div class="bg-gradient-to-b from-violet-600/[.15] via-transparent">
      <div class="relative overflow-hidden">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div class="text-center">
            <h1 class="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              My Space
            </h1>

            <p class="mt-3 text-lg text-gray-400">
              Votre space concernant votre espace
            </p>

            <div class="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              <!-- Form -->
              <form>
                <div
                    class="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100/30 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                  <div class="flex-[1_0_0%]">
                    <!-- INPUT -->
                    <label for="hs-search-article-1"
                           class="block text-sm text-gray-700 font-medium dark:text-white"><span class="sr-only">Chercher un astre</span></label>
                    <input name="hs-search-article-1" id="hs-search-article-1"
                           class="p-3 block w-full border-transparent rounded-md   dark:bg-gray-800 dark:text-gray-400"
                           placeholder="Chercher un astre" v-model="search">
                  </div>
                  <div class="flex-[0_0_auto]">
                    <a class="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold  bg-gradient-to-tl from-blue-600 to-violet-600 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                       href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </form>
              <!-- End Form -->

              <!-- SVG Element -->
              <div class="hidden md:block absolute top-0 right-0 -translate-y-12 translate-x-20">
                <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10"
                        stroke-linecap="round"/>
                  <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor"
                        stroke-width="10" stroke-linecap="round"/>
                  <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor"
                        stroke-width="10" stroke-linecap="round"/>
                </svg>
              </div>
              <!-- End SVG Element -->

              <!-- SVG Element -->
              <div class="hidden md:block absolute bottom-0 left-0 translate-y-10 -translate-x-32">
                <svg class="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                      stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
                </svg>
              </div>
              <!-- End SVG Element -->
            </div>

            <div class="mt-10 sm:mt-20">
              <router-link
                  class="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium  bg-gradient-to-tl from-blue-600 to-violet-600  text-gray-100 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  to="/">
                Retour
              </router-link>
              <a class="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                 href="#">
                Moons
              </a>
              <a class="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                 href="#">

                Planet
              </a>
            </div>
          </div>
        </div>
      </div>
      <button @click="scrollToTop" title="top"
              class="fixed fill-white z-90 bottom-10 right-8 bg-orange-600 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-orange-700 hover:drop-shadow-2xl ">
        <svg class="w-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-up</title>
          <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"/>
        </svg>
      </button>
      <section>
        <div class="px-6">

          <ul class="">
            <div class="grid grid-cols-3 gap-4" v-if="search.length < 1">
              <li v-for="astre in $store.getters.astres" :key="astre.id" class="m-4">

                <div
                    class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <div class="h-52 flex flex-col justify-center items-center bg-violet-950 rounded-t-xl">
                    <img v-if="astre.isPlanet" alt="Image de planet" class="w-1/3 m-4 "
                         :src="require('../assets/earth.svg')">
                    <img v-else alt="Image de astre" class="w-1/3 m-4 " :src="require('../assets/Planet.png')">
                  </div>
                  <div class="p-4 md:p-6">
                  <span class="block mb-1 text-xs font-semibold uppercase  dark:text-blue-500">
                      <h1 v-if="astre.isPlanet" class="text-orange-500">Planète</h1>
                      <h1 v-else class="text-blue-600">Astre autre</h1>
                    </span>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                      {{ astre.name }}
                    </h3>
                    <ul>
                      <li>
                    <span class="mt-3 text-gray-500">
                      Nom anglais: <span class="font-semibold">{{ astre.englishName }} </span>
                    </span>
                      </li>
                      <li>
                    <span class="mt-3 text-gray-500">
                      Densité: {{ astre.density }}
                    </span>
                      </li>
                    </ul>
                  </div>
                  <div
                      class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                    <router-link
                        class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        :to="`/astres/${astre.id}`">

                      Voir le détail

                    </router-link>
                    <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                       href="#">

                      Ajouter aux favoris


                    </a>
                  </div>
                </div>

              </li>
            </div>


            <div class="grid grid-cols-3 gap-4" v-else>

              <li v-for="astre in filteredItems" :key="astre.id" class="m-4">
                <div
                    class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <div class="h-52 flex flex-col justify-center items-center bg-violet-950 rounded-t-xl">
                    <img v-if="astre.isPlanet" alt="Image de planet" class="w-1/3 m-4 "
                         :src="require('../assets/earth.svg')">
                    <img v-else alt="Image de astre" class="w-1/3 m-4 " :src="require('../assets/Planet.png')">
                  </div>
                  <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
          <h1 v-if="astre.isPlanet">Planète</h1>
          <h1 v-else>Astre autre</h1>
        </span>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                      {{ astre.name }}
                    </h3>
                    <ul>
                      <li>
                    <span class="mt-3 text-gray-500">
                      Nom anglais: <span class="font-semibold">{{ astre.englishName }} </span>
                    </span>
                      </li>
                      <li>
                    <span class="mt-3 text-gray-500">
                      Densité: {{ astre.density }}
                    </span>
                      </li>

                    </ul>

                  </div>
                  <div
                      class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                    <div
                        class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                      <router-link :to="`/astres/${astre.id}`">

                        Voir le détail
                      </router-link>
                    </div>
                    <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                       href="#">

                      Ajouter aux favoris

                    </a>
                  </div>
                </div>
              </li>
            </div>
            <!--          Filter ----------------------------->
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('getAstres');


    console.log(this.$store.commit('getAstres'))
  },
  data() {
    return {
      search: '',
    }

  },
  computed: {
    filteredItems() {
      let astres = this.$store.getters['astres']
      return astres.filter(item => {
        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }
}
</script>
