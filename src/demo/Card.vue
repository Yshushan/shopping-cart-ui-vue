<template>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <v-card>
        <v-card-title primary-title class="indigo darken-3 white--text">
          <span class="headline">Card Usage</span>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon color="white">search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="white">room</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam repellat necessitatibus voluptate sed sunt impedit eligendi, eos id ratione quasi non laborum quo blanditiis reprehenderit consectetur nam. Repellat, ratione.</v-card-text>
        <v-list>
          <template v-for="(item, i) in items">
            <v-list-tile avatar :key="item.title" @click="item.action=!item.action">
              <v-list-tile-action>
                <v-icon>folder</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{item.title}}</v-list-tile-title>
                <v-list-tile-sub-title>{{item.subtitle}}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon :class="{'red--text':item.action}">star</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider :key="i" v-if="i<items.length-1"></v-divider>
          </template>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="yellow">confirm</v-btn>
          <v-btn flat color="green">cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 md6>
      <v-card>
        <v-img :src="img" height="200">
          <v-container fill-height class="pa-1">
            <v-layout column fill-height>
              <v-spacer></v-spacer>
              <v-card-title class="pa-1">
                <v-btn dark icon>
                  <v-icon>chevron_left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn dark icon>
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn dark icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </v-card-title>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores quia ea dolore fuga, ad,
          nulla eaque delectus magnam alias, molestiae voluptatem placeat cupiditate autem! Sint pariatur optio quam eum iure?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quia ea dolore fuga, ad, nulla eaque delectus magnam alias, molestiae voluptatem placeat cupiditate autem! Sint
          pariatur optio quam eum iure?
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      img: require('../assets/11111.png'),
      items: [
        { title: 'fasfqrqf', subtitle: 'faqerqwfasdflqkjwerilsdhflasdfasdfqwer', action: false },
        { title: 'fasdfqqf', subtitle: 'faqerqwfasdflqkjwerilsdhflasdfasdfqwer', action: false },
        { title: 'fasdqrf', subtitle: 'faqerqwfasdflqkjwerilsdhflasdfasdfqwer', action: false },
        { title: 'fasdsqrqf', subtitle: 'faqerqwfasdflqkjwerilsdhflasdfasdfqwer', action: false },
        { title: 'fasfqrq', subtitle: 'faqerqwfasdflqkjwerilsdhflasdfasdfqwer', action: false }
      ]
    }
  }
}
</script>
