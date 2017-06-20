<template>
  <div>
    <v-layout row wrap justify-space-around>
      <v-flex sm12 lg4 v-for="item in list" :key="item.id" style="height: 100%;">
        <ExperienceCard :item="item" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ExperienceCard from '@/components/ExperienceCard'

  export default {
    created () {
      this.$store.dispatch('setTitle', 'Experience')
    },
    computed: {
      ...mapGetters('experience', [
        'list'
      ])
    },
    components: {
      ExperienceCard
    }
  }
</script>

<style lang="stylus">
.layout.row.wrap
  height: auto
</style>
