<template>
  <v-app dark>
    <v-parallax height="100%" src="three_sisters.JPG">
      <v-main>
        <v-container
          :style="{ background: $vuetify.theme.themes['dark'].background }"
        >
          <nuxt />
        </v-container>
      </v-main>
      <v-footer :absolute="!fixed" app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-parallax>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Harmon's Portfolio",
    };
  },
};
</script>
