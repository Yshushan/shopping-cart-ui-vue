<template>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <v-card>
        <v-card-title class="title text-capitalize">normal alert</v-card-title>
        <v-card-text>
          <v-alert type="success" :value="true">This is a success alert</v-alert>
          <v-alert type="error" :value="true">This is a error alert</v-alert>
          <v-alert type="info" :value="true">This is a info alert</v-alert>
          <v-alert type="warning" :value="true">This is a warning alert</v-alert>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md6>
      <v-card>
        <v-card-title class="title text-capitalize">outline alert</v-card-title>
        <v-card-text>
          <v-alert type="success" outline :value="true">This is a success alert</v-alert>
          <v-alert type="error" outline :value="true">This is a error alert</v-alert>
          <v-alert type="info" outline :value="true">This is a info alert</v-alert>
          <v-alert type="warning" outline :value="true">This is a warning alert</v-alert>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md6>
      <v-card>
        <v-card-title class="title text-capitalize">alert with custom icon and no icon</v-card-title>
        <v-card-text>
          <v-alert
            color="success"
            :value="true"
            icon="done_outline"
          >This is a success alert witn a custom icon</v-alert>
          <v-alert
            color="error"
            :value="true"
            icon="error_outline"
          >This is a error alert with a custom icon</v-alert>
          <v-alert color="info" :value="true">This is a info alert with no icon</v-alert>
          <v-alert color="warning" :value="true">This is a warning alert with no icon</v-alert>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md6>
      <v-card>
        <v-card-title class="title text-capitalize">toggle alert with transiton</v-card-title>
        <v-card-actions class="justify-center">
          <v-btn @click="alert=!alert" color="primary">toggle</v-btn>
        </v-card-actions>
        <v-card-text>
          <v-alert
            type="success"
            outline
            :value="alert"
            transition="scale-transition"
          >This is a success alert</v-alert>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md6>
      <v-card>
        <v-card-title class="title text-capitalize">dismissible alert</v-card-title>
        <div class="text-xs-center pa-3" v-show="!dismiss">
          <v-btn @click="dismiss=!dismiss" color="primary">toggle</v-btn>
        </div>
        <div class="pa-3">
          <v-alert type="success" v-model="dismiss" dismissible>This is a success alert</v-alert>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      alert: true,
      dismiss: true
    }
  }
}
</script>
