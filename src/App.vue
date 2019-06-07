<template>
  <v-app>
    <v-card class="mt-3 px-4">
      <v-card-title class="title">{{type}}</v-card-title>
      <v-radio-group v-model="type">
        <v-radio v-for="{label, value1} of radioData" :key="value1" :label="label" :value="value1"/>
      </v-radio-group>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      type: "selector",
      radioData: [
        { label: "Number", value1: "number" },
        { label: "Selector", value1: "selector" },
        { label: "Element", value1: "element" }
      ]
    };
  }
};
</script>
