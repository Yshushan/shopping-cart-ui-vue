<template>
  <v-layout row>
    <v-flex xs12 md8 offset-md2>
      <div class="pa-3 d-flex justify-between align-center">
        <v-btn @click="expandAll">all</v-btn>
        <v-btn @click="collapseAll">none</v-btn>
        <span>{{panel}}</span>
      </div>
      <v-expansion-panel dark expand v-model="panel">
        <v-expansion-panel-content v-for="item of items" :key="item.title">
          <template v-slot:header>
            <div class="title">{{item.title}} {{item.expand}}</div>
          </template>
          <v-card>
            <v-card-text class="indigo lighten-1 white--text">{{item.text}}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      panel: [false, false, false, false],
      items: [
        {
          title: 'XiaoMi',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          title: 'HuaWei',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          title: 'iPhone',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          title: 'OnePlus',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]
    }
  },
  methods: {
    collapseAll() {
      this.panel = this.panel.map(i => false)
    },
    expandAll() {
      this.panel = this.panel.map(i => true)
    }
  }
}
</script>
