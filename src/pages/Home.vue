<template>
  <v-layout row>
    <v-flex sm12 lg6 offset-lg3>
      <v-card>
        <v-card-row img="/static/pikes_peak.jpg" height="300px">
          <v-card-text class="white--text pa-0">
            <v-card-row height="100%" class="pl-5 pt-5 mt-5">
              <div class="display-1 pl-0 pt-5"><span class="white--text">Web Developer, Certified Scrum Master</span></div>
            </v-card-row>
          </v-card-text>
        </v-card-row>
        <v-list two-line>
          <v-list-item @click="openPage('https://github.com/mattdharmon') ">
            <v-list-tile>
              <v-list-tile-action>
                <icon name="github" scale="2"></icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>github.com/mattdharmon</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item @click="openPage('https://www.linkedin.com/in/mattdharmon')">
            <v-list-tile>
              <v-list-tile-action>
                <icon name="linkedin" scale="2"></icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>www.linkedin.com/in/mattdharmon</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-tile>
              <v-list-tile-action>
                <icon name="map" scale="2"></icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Madison, WI</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-tile>
              <v-list-tile-action>
                <icon name="building" scale="2"></icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Experience</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-list-item v-for="item in list.slice(0, 2)" :key="item.id">
            <v-list-tile>
              <v-list-tile-action>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.company }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.title }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-list-item @click="experiences">
            <v-list-tile>
              <v-list-tile-action>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title><router-link :to="{ name: 'experiences' }">...More Experiences</router-link></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters('experience', [
        'list'
      ])
    },
    methods: {
      experiences () {
        this.$router.push({ name: 'experiences' })
      },
      openPage (url) {
        window.open(url, '_blank')
      }
    }
  }
</script>

<style lang="stylus">
h2
  color: black
</style>
