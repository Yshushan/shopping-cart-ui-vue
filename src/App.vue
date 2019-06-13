<template>
  <v-app app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        <v-list-tile v-for="comp in comps" :key="comp.name" :to="{name:comp.route}">
          <v-list-tile-content>
            <v-list-tile-title>{{comp.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app clipped-left>
      <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Vuetify Components Usage</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container grid-list-xl>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: null,
      comps: [
        {
          name: 'Expansion Panel',
          route: 'expansion-panel'
        },
        {
          name: 'List',
          route: 'list'
        }
      ]
    }
  }
}
</script>
