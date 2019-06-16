<template>
  <div>
    <div>
      <v-btn color="success">success</v-btn>
      <v-btn color="error">error</v-btn>
      <v-btn color="info">info</v-btn>
      <v-btn color="warning">warning</v-btn>
    </div>
    <div>
      <v-btn class="text-lowercase" color="red" dark small>small</v-btn>
      <v-btn class="text-lowercase" color="indigo" dark large>large</v-btn>
      <v-btn class="text-lowercase" color="green" outline>outline</v-btn>
      <v-btn class="text-lowercase" color="yellow" flat>flat</v-btn>
      <v-btn class="text-lowercase" color="grey" dark fab>fab</v-btn>
      <v-btn class="text-lowercase" color="purple" dark depressed>depressed</v-btn>
      <v-btn class="text-lowercase" color="pink" dark round>round</v-btn>
      <v-btn class="text-lowercase" disabled>diabled</v-btn>
      <v-btn
        class="text-lowercase"
        :loading="loading1"
        :disabled="loading1"
        @click="loader = 'loading1'"
      >loading</v-btn>
      <v-btn
        class="text-lowercase"
        :loading="loading2"
        :disabled="loading2"
        @click="loader = 'loading2'"
      >
        custom loading
        <template v-slot:loader>
          <span class="custom-loading">loading...</span>
        </template>
      </v-btn>
    </div>
    <div>
      <v-btn block class="text-lowercase">block</v-btn>
      <v-btn block round class="text-lowercase" color="teal" dark>block | round</v-btn>
    </div>
    <div style="position: relative">
      <v-btn absolute left class="text-lowercase">absolute left</v-btn>
      <v-btn absolute right class="text-lowercase">absolute right</v-btn>
    </div>
    <v-btn fab fixed bottom right color="red" dark small>
      <v-icon outline>arrow_upward</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loader: null,
      loading1: false,
      loading2: false
    }
  },
  watch: {
    loader (newVal) {
      this[newVal] = true
      setTimeout(() => {
        this[newVal] = false
      }, 2000)
      this.loader = null
    }
  }
}
</script>

<style lang="scss" scoped>
  .custom-loading{
    animation: loader 1s infinite;
  }
  @keyframes loader {
    from {
      transform: rotate(0)
    }
    to {
      transform: rotate(360deg)
    }
  }
</style>
