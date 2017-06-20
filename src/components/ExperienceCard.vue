<template>
  <v-card class="mb-3">
    <v-card-row class="primary">
      <v-card-title class="white--text">
        {{ item.company }}
      </v-card-title>
    </v-card-row>
    <v-card-text>
      <v-card-row>
        <v-icon class="mr-5" dark>label</v-icon>
        <div>
          {{ item.title }}
        </div>
      </v-card-row>
      <v-card-row>
        <v-icon class="mr-5" primary>map</v-icon>
        <div>
          {{ item.location }}
        </div>
      </v-card-row>
      <v-card-row>
        <v-icon class="mr-5" primary>event</v-icon>
        <div>
          {{ item.start_date }} - {{ item.end_date}}
        </div>
      </v-card-row>
    </v-card-text>
    <v-card-row actions class="blue-grey darken-1 mt-0">
      <v-btn flat class="white--text" @click.native="goTo(item.id)">Learn More</v-btn>
    </v-card-row>
  </v-card>
</template>

<script>
  export default {
    props: [
      'item'
    ],
    methods: {
      goTo (id) {
        this.$router.push({ name: 'experience', params: { id: id } })
      }
    }
  }
</script>
