<template>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <v-list class="elevation-3">
        <v-list-tile v-for="(item, key) in list1" :key="key" avatar @click>
          <v-list-tile-action>
            <v-icon v-if="item.icon" color="pink">{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-avatar>
            <img :src="item.avatar">
          </v-list-tile-avatar>
        </v-list-tile>
      </v-list>
    </v-flex>
    <v-flex xs12 md6>
      <v-list three-line class="elevation-3">
        <template v-for="(item,i) in list2">
          <v-subheader :key="i" v-if="item.header">{{item.header}}</v-subheader>
          <v-divider :key="i" inset v-else-if="item.divider"></v-divider>
          <v-list-tile :key="i" avatar v-else @click>
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
              <v-list-tile-sub-title>{{item.subtitle}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon v-if="item.icon">
                <v-icon color="grey">{{item.icon}}</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      list1: [
        {
          icon: 'star',
          title: 'Nicholas Yang',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
        },
        {
          title: 'Travis Howard',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
        },
        {
          title: 'Ali Connors',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
        },
        {
          title: 'Cindy Baker',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
        }
      ],
      list2: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle:
            "Ali Connors, I'll be in your neighborhood? I'll be in your neighborhood?",
          icon: 'done'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          subtitle:
            'to Alex, Scott, Jennifer, is weekend Scott, Jennifer, is weekend Scott, Jennifer, is weekend.'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle:
            'Sandra Adams, Do you have  you ever been  have  you ever been have  you ever been  have?'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle:
            'Trevor Hansen, Have any idr birthday? Have any idr birthday Have any idr birthday Have any idr birthday',
          icon: 'info'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle:
            'Britta Holt, We should eat tomatillo Tacos. We should eat tomatillo Tacos We should eat tomatillo Tacos'
        }
      ]
    }
  }
}
</script>
