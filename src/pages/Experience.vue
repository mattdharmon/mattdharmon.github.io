<template>
  <v-layout column justify-space-around>
    <v-flex sm12 lg6 offset-lg3>
      <v-card>
        <v-card-row img="/static/pikes_peak.jpg" height="300px">
          <v-card-text class="white--text pa-0">
            <v-card-row height="100%" class="pl-5 pt-5 mt-5">
              <div class="display-1 pl-0 pt-5"><span class="white--text">{{ selected.company }}</span></div>
            </v-card-row>
          </v-card-text>
        </v-card-row>
        <v-list two-line>
          <v-list-item @click="openPage('https://github.com/mattdharmon')">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon class="black--text" large>label</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ selected.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item @click="openPage('https://www.linkedin.com/in/mattdharmon')">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon large class="black--text">event</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ selected.start_date }} - {{ selected.end_date }}</v-list-tile-title>
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
                <v-list-tile-title>{{ selected.location }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon large class="black--text">assignment</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Responsibilities</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-list-item v-for="(value, key, index) in selected.responsibilities" :key="index">
            <v-list-tile>
              <v-list-tile-action>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="no-hover">- {{ value }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    created () {
      this.$store.dispatch('experience/select', this.$route.params.id)
      this.$store.dispatch('setTitle', `Experience: ${this.$store.state.experience.selected.company}`)
    },
    computed: {
      ...mapState('experience', [
        'selected'
      ])
    }
  }
</script>

<style lang="stylus">
a.list__tile
  &:hover
    background-color white
    cursor default
</style>
