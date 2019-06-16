<template>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <p class="title">Regular</p>
      <v-text-field label="regular"></v-text-field>
      <v-text-field label="regular | single-line" single-line></v-text-field>
      <v-text-field placeholder="placeholder with no label"></v-text-field>
      <v-text-field label="Regular" placeholder="placeholder"></v-text-field>
      <v-text-field label="regular | disabled" disabled value="Nicholas Yang"></v-text-field>
      <v-text-field label="regular | readonly" readonly value="Nicholas Yang"></v-text-field>
      <v-text-field clearable label="clearable" value="clear up"></v-text-field>
      <v-text-field label="prepend-icon" prepend-icon="place"></v-text-field>
      <v-text-field label="prepend-inner-icon" prepend-inner-icon="place"></v-text-field>
      <v-text-field label="append-icon" append-icon="place"></v-text-field>
      <v-text-field label="append-outer-icon" append-outer-icon="place"></v-text-field>
      <v-text-field label="number" type="number"></v-text-field>
      <v-text-field label="normal password" type="password"></v-text-field>
      <v-text-field
        label="visiable password"
        :type="show1?'text':'password'"
        :append-icon="show1?'visibility':'visibility_off'"
        @click:append="show1=!show1"
      ></v-text-field>
      <v-text-field
        value
        counter="15"
        :rules="[v=>v.length<=15 || '字数超出范围！']"
        hint="This field uses counter attribute"
        label="counter"
      ></v-text-field>
      <v-text-field
        maxlength="15"
        counter
        hint="This field uses maxlength attribute"
        label="maxlength"
      ></v-text-field>
    </v-flex>
    <v-flex xs12 md6>
      <p class="title">Solo</p>
      <v-text-field solo label="solo"></v-text-field>
      <v-text-field solo disabled label="solo | disabled" value="solo | disabled"></v-text-field>
      <v-text-field solo readonly label="solo | readonly" value="solo | readonly"></v-text-field>
      <v-text-field solo clearable label="clearable" value="clear up"></v-text-field>
      <v-text-field solo label="prepend-icon" prepend-icon="home"></v-text-field>
      <v-text-field solo label="prepend-inner-icon" prepend-inner-icon="home"></v-text-field>
      <v-text-field solo label="append-icon" append-icon="home"></v-text-field>
      <v-text-field solo label="append-outer-icon" append-outer-icon="home"></v-text-field>
      <v-text-field solo label="number" type="number"></v-text-field>
      <v-text-field solo label="normal password" type="password"></v-text-field>
      <v-text-field
        solo
        label="visiable password"
        :type="show2?'text':'password'"
        :append-icon="show2?'visibility':'visibility_off'"
        @click:append="show2=!show2"
      ></v-text-field>
      <v-text-field
        value
        solo
        counter="15"
        :rules="[v=>v.length<=15 || '字数超出范围！']"
        hint="This field uses counter attribute"
        label="counter"
      ></v-text-field>
      <v-text-field
        solo
        maxlength="15"
        counter
        hint="This field uses maxlength attribute"
        label="maxlength"
      ></v-text-field>
    </v-flex>
    <v-flex xs12 md6>
      <p class="title">Box</p>
      <v-text-field box label="box"></v-text-field>
      <v-text-field box single-line placeholder="single-line"></v-text-field>
      <v-text-field box label="box" placeholder="placeholder"></v-text-field>
      <v-text-field box disabled label="box | disabled" value="box | disabled"></v-text-field>
      <v-text-field box readonly label="box | readonly" value="box | readonly"></v-text-field>
      <v-text-field box clearable label="clearable" value="clear up"></v-text-field>
      <v-text-field box label="prepend-icon" prepend-icon="phone"></v-text-field>
      <v-text-field box label="prepend-inner-icon" prepend-inner-icon="phone"></v-text-field>
      <v-text-field box label="append-icon" append-icon="phone"></v-text-field>
      <v-text-field box label="append-outer-icon" append-outer-icon="phone"></v-text-field>
      <v-text-field box label="number" type="number"></v-text-field>
      <v-text-field box label="normal password" type="password"></v-text-field>
      <v-text-field
        box
        label="visiable password"
        :type="show3?'text':'password'"
        :append-icon="show3?'visibility':'visibility_off'"
        @click:append="show3=!show3"
      ></v-text-field>
      <v-text-field
        value
        box
        counter="15"
        :rules="[v=>v.length<=15 || '字数超出范围！']"
        hint="This field uses counter attribute"
        label="counter"
      ></v-text-field>
      <v-text-field
        box
        maxlength="15"
        counter
        hint="This field uses maxlength attribute"
        label="maxlength"
      ></v-text-field>
    </v-flex>
    <v-flex xs12 md6>
      <p class="title">Outline</p>
      <v-text-field outline label="outline"></v-text-field>
      <v-text-field outline single-line placeholder="single-line"></v-text-field>
      <v-text-field outline label="outline" placeholder="placeholder"></v-text-field>
      <v-text-field outline disabled label="outline | disabled" value="outline | disabled"></v-text-field>
      <v-text-field outline readonly label="outline | readonly" value="outline | readonly"></v-text-field>
      <v-text-field outline clearable label="clearable" value="clear up"></v-text-field>
      <v-text-field outline label="prepend-icon" prepend-icon="person"></v-text-field>
      <v-text-field outline label="prepend-inner-icon" prepend-inner-icon="person"></v-text-field>
      <v-text-field outline label="append-icon" append-icon="person"></v-text-field>
      <v-text-field outline label="append-outer-icon" append-outer-icon="person"></v-text-field>
      <v-text-field outline label="number" type="number"></v-text-field>
      <v-text-field outline label="normal password" type="password"></v-text-field>
      <v-text-field
        outline
        label="visiable password"
        :type="show4?'text':'password'"
        :append-icon="show4?'visibility':'visibility_off'"
        @click:append="show4=!show4"
      ></v-text-field>
      <v-text-field
        value
        outline
        counter="15"
        :rules="[v=>v.length<=15 || '字数超出范围！']"
        hint="This field uses counter attribute"
        label="counter"
      ></v-text-field>
      <v-text-field
        outline
        maxlength="15"
        counter
        hint="This field uses maxlength attribute"
        label="maxlength"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false
    }
  }
}
</script>
