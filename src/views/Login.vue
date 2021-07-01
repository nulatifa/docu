<template style="background-color:grey">
  <div class="bid">
    <h2>Sign In</h2>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        input 
        type="password"
        :rules="[v => !!v || 'Password is required']"
        label="Password"
        required
      ></v-text-field>
      <div class="bit">
        <p></p>
        <v-btn :to="{ name: 'Home'}"
          :disabled="!valid"
          color="success"
          class="mr"
          @click="validate"
        >
          Sign In
        </v-btn>
        <p></p>
        <p>Don't have an account? Sign up instead</p>
        <v-btn :to="{ name: 'Register'}"
          color="primary"
          class="mr"
        >
          Sign Up
        </v-btn>
      </div> 
    </v-form>
  </div>
</template>
<script>
  export default {
    data: () => ({
      password: '',
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
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
.bit{
  text-align: center;
}
.bid{
  width: 35%;
  margin: 0 auto;
  padding: 60px 36px 80px 36px;
  background:white;
  border-radius: 10px;
  margin-top:10px;
}
h2{
  font-size: 36px;
  font-family: "Cambria";
  padding-bottom: 12px;
  text-align: justify;
  font-weight: 100;
  margin-bottom: 10px;
  padding-top: 14px;
}
.v-main__wrap{
    background-color: grey;
}
</style>

