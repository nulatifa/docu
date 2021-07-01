<template style="background-color:grey">
  <div class="bd">
    <h2>Upload</h2>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
    <v-text-field
        v-model="name"
        :counter="20"
        label="Title"
        required
    ></v-text-field>

    <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Type"
        required
    ></v-select>

    <v-file-input class="inp"
        show-size
        label="File input"
    ></v-file-input>

      <div class="bt">
        <p></p>
        <v-btn :to="{ name: 'Home'}"
          :disabled="!valid"
          color="success"
          class="mr"
          @click="validate"
        >
          Upload
        </v-btn>
      </div> 
    </v-form>
  </div>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Title is required',
        v => (v && v.length <= 20) || 'Title must be less than 20 characters',
      ],
      select: null,
      items: [
        'pdf',
        'doc',
        'jpeg',
        'png',
        'xls'
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
  }
</script>
<style>
.bt{
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
.bd{
  width: 35%;
  margin: 0 auto;
  padding: 60px 36px 30px 36px;
  background:white;
  border-radius: 10px;
  margin-top: 10px;
}
h2{
  font-size: 36px;
  font-family: "Cambria";
  padding-bottom: 12px;
  text-align: justify;
  font-weight: 100;
  margin-bottom: 10px;
  padding-top: 12px;
}
.v-main__wrap{
    background-color: grey;
}
.v-input__prepend-outer{
    padding-top: 25px;
}
</style>

