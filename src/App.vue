<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
    >
      <v-list>
        <v-list-item v-for="link in links" :key="link.label" @click="openLink(link.name)">
          <v-list-tile value="true">
            <v-list-tile-action>
              <v-icon light v-html="link.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="primary--text">{{ link.label }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary" fixed>
      <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><span class="white--text">{{ title }}</span></v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        clipped: true,
        drawer: true,
        fixed: false,
        links: [
          { icon: 'home', name: { name: 'home' }, label: 'Home' },
          { icon: 'business', name: { name: 'experiences' }, label: 'Experience' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false
      }
    },
    computed: {
      ...mapGetters([
        'title'
      ])
    },
    methods: {
      openLink (options) {
        this.$router.push(options)
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
