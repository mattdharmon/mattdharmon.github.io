<template>
  <v-row justify="center">
    <v-col>
      <v-row justify="center">
        <v-col cols="12" sm="8">
          <v-card>
            <v-img src="pikes_peak.jpg" height="200px"></v-img>
            <v-card-title class="cyan darken-1">
              <span class="headline white--text">Matthew Harmon</span>
              <v-spacer></v-spacer>
            </v-card-title>

            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-github</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title
                    ><a href="https://github.com/mattdharmon"
                      >https://github.com/mattdharmon</a
                    ></v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-linkedin</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title
                    ><a href="www.linkedin.com/in/mattdharmon"
                      >www.linkedin.com/in/mattdharmon</a
                    ></v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Madison, WI</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" sm="8">
          <v-card>
            <!-- <v-img src="valley.JPG" height="200px"></v-img> -->
            <v-card-title class="red darken-1">
              <span class="headline white--text">Projects</span>
              <v-spacer></v-spacer>
            </v-card-title>

            <v-slide-group v-model="model" class="pa-4" show-arrows mandatory>
              <v-slide-item
                v-for="project in projects"
                :key="project.id"
                v-slot="{ active, toggle }"
              >
                <v-card
                  :color="active ? 'primary' : 'grey lighten-1'"
                  class="ma-4"
                  height="200"
                  width="300"
                  @click="toggle"
                >
                  <v-img height="90" :src="project.image"></v-img>
                  <v-card-title class="title" style="overflow-wrap: anywhere">
                    {{ project.title }}
                  </v-card-title>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  ></v-icon>
                </v-card>
              </v-slide-item>
            </v-slide-group>

            <v-expand-transition>
              <v-col col="8">
                <v-sheet v-if="model != null" tile>
                  <v-card>
                    <!-- <v-img height="400" :src="projects[model].image"></v-img> -->
                    <v-card-title class="teal darken-1">
                      <span class="headline white--text">{{
                        projects[model].title
                      }}</span>
                      <v-spacer></v-spacer>
                    </v-card-title>

                    <v-list>
                      <v-list-item>
                        <v-list-item-action>
                          <v-icon>mdi-github</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title>
                            <a :href="projects[model].github">{{
                              projects[model].github
                            }}</a>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item v-if="projects[model].tableau">
                        <v-list-item-action>
                          <v-icon>mdi-chart-timeline-variant</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title>
                            <a :href="projects[model].tableau">{{
                              projects[model].tableau
                            }}</a>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-divider inset></v-divider>
                    <v-card-text>
                      {{ projects[model].description }}
                    </v-card-text>
                  </v-card>
                </v-sheet>
              </v-col>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" sm="8">
          <v-card>
            <!-- <v-img height="200px" src="pond.JPG"> </v-img> -->
            <v-card-title class="deep-orange darken-1">
              <span class="headline white--text">Experience</span>
              <v-spacer></v-spacer>
            </v-card-title>

            <v-card-text>
              <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item
                  v-for="job in experience"
                  :key="job.id"
                  :color="job.color"
                  :icon="job.icon"
                  fill-dot
                >
                  <span slot="opposite"
                    >{{ job.start_date }} - {{ job.end_date }}</span
                  >
                  <v-card
                    :color="job.color"
                    class="elevation-2"
                    text-align="left"
                  >
                    <v-card-title class="title" style="overflow-wrap: anywhere">
                      {{ job.company }}
                    </v-card-title>
                    <v-card-subtitle>
                      {{ job.title }}
                    </v-card-subtitle>
                    <v-card-text class="white text--primary">
                      <ul>
                        <li
                          class="text--inverse"
                          v-for="resp in job.responsibilities"
                          :key="resp"
                        >
                          {{ resp }}
                        </li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" sm="8">
          <v-card class="mx-auto" tile>
            <!-- <v-img height="200px" src="castle.JPG"> </v-img> -->
            <v-card-title class="purple darken-1">
              <span class="headline white--text"
                >Education and Certificates</span
              >
              <v-spacer></v-spacer>
            </v-card-title>

            <v-list-item three-line v-for="edu in education" :key="edu.id">
              <v-list-item-content>
                <v-list-item-title>{{edu.school}}</v-list-item-title>
                <v-list-item-subtitle>
                  {{edu.degree}}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  {{edu.issued_date}} - {{edu.expiration_date}}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    experience() {
      return this.$store.state.experience.list;
    },
    projects() {
      return this.$store.state.project.list;
    },
    education() {
      return this.$store.state.education.list;
    },
  },
  data: () => ({
    window: 0,
    model: null,
  }),
};
</script>

<style>
.text--inverse {
  background-color: white;
  color: black;
}
.header-wrap {
  overflow-wrap: break-word;
}
</style>